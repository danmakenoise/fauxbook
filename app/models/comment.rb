class Comment < ActiveRecord::Base
  validates :body, :commentable_id, :commentable_type, presence: true

  belongs_to :commentable, polymorphic: true

  has_many :comments, as: :commentable
end
