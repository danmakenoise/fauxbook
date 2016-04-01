json.extract! @profile, :id, :first_name, :last_name, :gender, :location
json.birthday @profile.birthday.strftime("%B %d, %Y")
json.profile_picture @profile.profile_picture
json.cover_photo @profile.cover_photo
