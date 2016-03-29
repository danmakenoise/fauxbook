class User < ActiveRecord::Base
  validate :email, :password, :password_digest, :session_token
  validates_format_of :email, with: /.+@.+\.+/
  validates_uniqueness_of :email, :session_token

  after_initialize :ensure_session_token

  attr_reader :password

  def User.find_by_credentials email, password
    user = User.find_by email: email
    return nil unless user
    return user if user.is_password? password
  end

  def is_password? password
    BCrypt::Password.new( self.password_digest ).is_password? password
  end

  def password= password
    self.password_digest = BCrypt::Password.create password
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end
end
