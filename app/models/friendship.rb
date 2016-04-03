class Friendship < ActiveRecord::Base
  validates_associated :requester, :requested

  belongs_to :requester class_name: 'User', foreign_key: 'requester_id'
  belongs_to :requested class_name: 'User', foreign_key: 'requested_id'

  def approve!
    self.approved = true;
  end

  def deny!
    self.destroy
  end
end
