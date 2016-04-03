json.array! @friends do |friend|
  json.name "#{friend.profile.first_name} #{friend.profile.last_name}"
end
