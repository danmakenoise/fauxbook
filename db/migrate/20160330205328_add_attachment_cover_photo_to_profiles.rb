class AddAttachmentCoverPhotoToProfiles < ActiveRecord::Migration
  def self.up
    change_table :profiles do |t|
      t.attachment :cover_photo
    end
  end

  def self.down
    remove_attachment :profiles, :cover_photo
  end
end
