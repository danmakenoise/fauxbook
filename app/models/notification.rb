class Notification < ActiveRecord::Base
  validates :author_id, :user_id, :post_id, :body, presence: true

  belongs_to :author, class_name: 'User'
  belongs_to :user
  belongs_to :post
end
