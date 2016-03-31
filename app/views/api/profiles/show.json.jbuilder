json.extract! @profile, :id, :first_name, :last_name, :gender, :location
json.birthday @profile.birthday.strftime("%B %d, %Y")
profile_picture = @profile.profile_picture.exists? ? @profile.profile_picture : asset_path('default_profile_picture.jpg')
cover_photo = @profile.cover_photo.exists? ? @profile.cover_photo : ''
json.profile_picture profile_picture
json.cover_photo cover_photo
