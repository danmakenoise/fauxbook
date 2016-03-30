class AddAttachmentProfilePictureToProfiles < ActiveRecord::Migration
  def self.up
    change_table :profiles do |t|
      t.attachment :profile_picture
    end
  end

  def self.down
    remove_attachment :profiles, :profile_picture
  end
end
