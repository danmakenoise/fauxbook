class Profile < ActiveRecord::Base
  validates :user_id, :first_name, :last_name, :birthday, :gender, presence: true
  validates :gender, inclusion: { in: %w(M F), message: 'Please pick a gender' }
  validates_uniqueness_of :user_id
  
  belongs_to :user
end
