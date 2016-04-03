class Friendship < ActiveRecord::Base
  validates :user_id, :friend_id, presence: true
  validates :accepted, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :friend, class_name: 'User'

  def Friendship.create ( user_id, friend_id )
    user_friendship = Friendship.create! user_id: user_id, friend_id: friend_id
    other_friendship = Friendship.create! user_id: friend_id, friend_id: user_id

    user_friendship
  end

  def accept!
    other_friendship = Friendship.find_by( user_id: self.friend_id )

    self.accepted!
    other_friendship.accepted!
  end

  def remove!
    other_friendship = Friendship.find_by( user_id: self.friend_id )

    self.denied!
    other_friendship.denied!
  end

  protected

  def accepted!
    self.accepted = true
    self.save
  end

  def denied!
    self.destroy
  end
end
