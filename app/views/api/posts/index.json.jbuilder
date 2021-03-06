json.ids @posts.map(&:id)

json.posts @posts do |post|
  json.photo post.photo( :medium )
  json.id post.id
  json.body post.body
  json.author_name "#{post.author.profile.first_name} #{post.author.profile.last_name}"
  json.author_id post.author_id
  json.author_picture post.author.profile.profile_picture.url( :thumb )
  json.date post.created_in_words
  json.receiver_name "#{post.receiver.profile.first_name} #{post.receiver.profile.last_name}"
  json.receiver_id post.receiver.id
  json.receiver_picture post.receiver.profile.profile_picture
  json.likes post.likes.size
  json.liked post.likers.include? current_user
end
