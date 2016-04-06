class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.integer :notifiable_id, null: false
      t.string :notifiable_type, null: false
      t.boolean :seen, null: false

      t.timestamps
    end
  end
end
