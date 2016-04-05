class User < ActiveRecord::Base
  validates :email, :password_digest, :profile, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates_format_of :email, with: /.+@.+\.+/
  validates_uniqueness_of :email, :session_token

  after_initialize :ensure_session_token

  attr_reader :password

  has_one :profile, dependent: :destroy

  has_many :authored_posts,
    class_name: 'Post',
    primary_key: :id,
    foreign_key: :author_id,
    dependent: :destroy

  has_many :created_friendships,
    class_name: 'Friendship',
    foreign_key: :user_id,
    dependent: :destroy

  has_many :requested_friendships,
    class_name: 'Friendship',
    foreign_key: :friend_id,
    dependent: :destroy

  has_many :pending_friend_requests,
    -> { where( friendships: { accepted: false } ) },
    through: :created_friendships,
    source: :friend

  has_many :friend_requests,
    -> { where( friendships: { accepted: false } ) },
    through: :requested_friendships,
    source: :user

  has_many :created_friends,
    -> { where( friendships: { accepted: true } ) },
    through: :created_friendships,
    source: :friend

  has_many :requested_friends,
    -> { where( friendships: { accepted: true } ) },
    through: :requested_friendships,
    source: :user

  has_many :comments, foreign_key: :author_id, dependent: :destroy

  def friends
    created_friends + requested_friends
  end

  def User.find_by_credentials email, password
    user = User.find_by email: email
    return nil unless user
    return user if user.is_password? password
  end

  def User.search search_query
    User.joins( :profile).includes( :profile ).where(
      "LOWER(CONCAT(profiles.first_name, ' ', profiles.last_name)) LIKE ?",
      "%#{search_query.downcase}%"
    )
  end

  def is_password? password
    BCrypt::Password.new( self.password_digest ).is_password? password
  end

  def password= password
    self.password_digest = BCrypt::Password.create password
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end
end
