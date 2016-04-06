include ActionView::Helpers::DateHelper

class Notification < ActiveRecord::Base
  validates :author_id, :user_id, :post_id, :body, presence: true

  belongs_to :author, class_name: 'User'
  belongs_to :user
  belongs_to :post

  def created_in_words
    "#{time_ago_in_words self.created_at} ago"
  end
end
