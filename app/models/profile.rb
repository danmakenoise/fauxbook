class Profile < ActiveRecord::Base
  has_attached_file :profile_picture, styles: { original: "600", medium: "200x200>" }, default_url: ActionController::Base.helpers.asset_path('default_profile_picture.jpg')
  has_attached_file :cover_photo, styles: { original: "900" }, default_url: ActionController::Base.helpers.asset_path('default_profile_picture.jpg')

  validates :user_id, :first_name, :last_name, :birthday, :gender, presence: true
  validates :gender, inclusion: { in: %w(M F), message: 'Please pick a gender' }
  validates_uniqueness_of :user_id
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  belongs_to :user

  has_many :posts
end
