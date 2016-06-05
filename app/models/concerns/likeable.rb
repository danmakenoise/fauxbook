module Likeable
  extend ActiveSupport::Concern

  included do
    has_many :likes, as: :likeable, dependent: :destroy
    has_many :likers, through: :likes, source: :user
  end
end
