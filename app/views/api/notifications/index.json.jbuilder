json.array! @notifications do |notification|
  json.id notification.id
  json.photo notification.author.profile.profile_picture.url :thumb
  json.author_id notification.author.id
  json.post_id notification.post_id
  json.body notification.body 
end
