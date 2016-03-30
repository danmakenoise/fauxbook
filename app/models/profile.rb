class Profile < ActiveRecord::Base
  has_attached_file :profile_picture, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: ActionController::Base.helpers.image_path("default_profile_picture.jpg")
  has_attached_file :cover_photo, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: ''

  validates :user_id, :first_name, :last_name, :birthday, :gender, presence: true
  validates :gender, inclusion: { in: %w(M F), message: 'Please pick a gender' }
  validates_uniqueness_of :user_id
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  belongs_to :user
end
