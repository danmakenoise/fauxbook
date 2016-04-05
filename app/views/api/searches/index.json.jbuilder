json.array! @users do |user|
  json.id user.id
  json.photo user.profile.profile_picture.url( :thumb )
  json.name "#{user.profile.first_name} #{user.profile.last_name}"
  json.location user.profile.location
end
