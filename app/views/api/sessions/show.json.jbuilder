profile_picture = current_user.profile.profile_picture.exists? ? current_user.profile.profile_picture : asset_path('default_profile_picture.jpg')
json.extract! @user, :id, :email
json.picture profile_picture
