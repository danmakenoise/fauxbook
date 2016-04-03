json.array! @friends do |friend|
  json.name "#{friend.profile.first_name} #{friend.profile.last_name}"
  json.id friend.id
  json.photo friend.profile.profile_picture.url
  json.location friend.profile.location
end
