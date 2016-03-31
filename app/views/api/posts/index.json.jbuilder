json.array! @posts do |post|
  profile_picture = post.author.profile.profile_picture.exists? ? post.author.profile.profile_picture : asset_path('default_profile_picture.jpg')
  json.id post.id
  json.body post.body
  json.author_name "#{post.author.profile.first_name} #{post.author.profile.last_name}"
  json.author_id post.author_id
  json.author_picture profile_picture
  json.date post.created_at.strftime("%B %d, %Y")
end
