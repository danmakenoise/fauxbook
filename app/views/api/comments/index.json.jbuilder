json.array! @comments do |comment|
  json.extract! comment,
    :id,
    :body,
    :commentable_id,
    :commentable_type,
    :author_id,
    :created_at

  json.author do
    json.id comment.author.id
    json.image comment.author.profile.profile_picture.url
  end
end
