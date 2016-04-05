json.extract! @user, :id, :email
json.picture @user.profile.profile_picture.url( :thumb )
json.name @user.profile.first_name
