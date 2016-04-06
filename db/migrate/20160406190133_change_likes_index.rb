class ChangeLikesIndex < ActiveRecord::Migration
  def change
    remove_index :likes, [:likeable_id, :user_id]
    add_index :likes, [:likeable_id, :user_id, :likeable_type], unique: true
  end
end
