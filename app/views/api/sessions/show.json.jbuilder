json.extract! @user, :id, :email
json.picture current_user.profile.profile_picture
json.name current_user.profile.first_name
