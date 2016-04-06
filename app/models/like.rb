class Like < ActiveRecord::Base
  validates :user_id, :likeable_id, :likeable_type, presence: true

  belongs_to :user
  belongs_to :likeable, polymorphic: true
end
