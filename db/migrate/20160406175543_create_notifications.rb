class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :user_id
      t.integer :notifiable_id
      t.string :notifiable_type
      t.boolean :seen
    end
  end
end
