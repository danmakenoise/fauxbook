class Comment < ActiveRecord::Base
  validates :body, :commentable_id, :commentable_type, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :author, class_name: 'User'

  has_many :comments, as: :commentable, dependent: :destroy
end
