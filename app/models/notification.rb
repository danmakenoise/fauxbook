class Notification < ActiveRecord::Base
  validates :user_id, :post_id, :body, :seen, presence: true

  belongs_to :user
  belongs_to :post
end
