class Post < ActiveRecord::Base
  validates :author_id, :profile_id, :body, presence: true

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :profile
end
