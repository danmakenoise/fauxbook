include ActionView::Helpers::DateHelper

class Comment < ActiveRecord::Base
  include Likeable

  validates :body, :commentable_id, :commentable_type, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :author, class_name: 'User'

  has_many :comments, as: :commentable, dependent: :destroy

  def created_in_words
    "#{time_ago_in_words self.created_at} ago"
  end
end
