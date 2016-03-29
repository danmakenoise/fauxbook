class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.references :user, index: true, foreign_key: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :gender, null: false
      t.string :location
      t.date :birthday, null: false

      t.timestamps
    end

    add_index :profiles, :first_name
    add_index :profiles, :last_name
  end
end
