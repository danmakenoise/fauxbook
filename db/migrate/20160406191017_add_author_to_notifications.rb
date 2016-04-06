class AddAuthorToNotifications < ActiveRecord::Migration
  def change
    add_column :notifications, :author_id, :integer, null: false
  end
end
