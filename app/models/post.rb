class Post < ActiveRecord::Base
  has_attached_file :photo, styles: { original: "600", medium: "400x400>" }, default_url: ''

  validates :author_id, :profile_id, :body, presence: true
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :profile
end
