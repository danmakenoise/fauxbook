class Friendship < ActiveRecord::Base
  validates :user_id, :friend_id, presence: true
  validates :accepted, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :friend, class_name: 'User'

  def Friendship.create ( user_id, friend_id )
    Friendship.create! user_id: user_id, friend_id: friend_id
  end

  def accept!
    self.accepted = true
    self.save
  end

  def remove!
    self.destroy
  end
end
