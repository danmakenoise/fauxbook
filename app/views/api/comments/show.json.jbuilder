json.extract! @comment,
  :id,
  :body,
  :commentable_id,
  :commentable_type,
  :author_id,
  :created_at

json.date @comment.created_at.strftime("%B %d, %Y")
json.likes comment.likes.count

if @comment.commentable_type == 'Comment'
  json.post_id @comment.commentable.commentable_id
end

json.author do
  json.id @comment.author.id
  json.name "#{@comment.author.profile.first_name} #{@comment.author.profile.last_name}"
  json.image @comment.author.profile.profile_picture.url( :medium )
end
