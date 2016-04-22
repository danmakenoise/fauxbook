[User.find_by(email: 'jack@fauxbook.com'),
User.find_by(email: 'diane@fauxbook.com'),
User.find_by(email: 'ted@fauxbook.com'),
User.find_by(email: 'mike@fauxbook.com')].each do |user|
  user.destroy if user
end

jack = User.new email: 'jack@fauxbook.com', password: 'password'
diane = User.new email: 'diane@fauxbook.com', password: 'password'
ted = User.new email: 'ted@fauxbook.com', password: 'password'
mike = User.new email: 'mike@fauxbook.com', password: 'password'

jack.profile = Profile.new(
  gender: 'M',
  birthday: (13..100).to_a.sample.years.ago,
  first_name: 'Jack',
  last_name: 'Sampleton',
  location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
  user_id: jack.id,
  profile_picture: File.new('public/images/jack.jpg')
)

diane.profile = Profile.new(
  gender: 'F',
  birthday: (13..100).to_a.sample.years.ago,
  first_name: 'Diane',
  last_name: 'LeExample',
  location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
  user_id: diane.id,
  profile_picture: File.new('public/images/diane.jpg')
)

ted.profile = Profile.new(
  gender: 'M',
  birthday: (13..100).to_a.sample.years.ago,
  first_name: 'Ted',
  last_name: 'Template',
  location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
  user_id: ted.id,
  profile_picture: File.new('public/images/ted.jpg')
)

mike.profile = Profile.new(
  gender: 'M',
  birthday: (13..100).to_a.sample.years.ago,
  first_name: 'Mike',
  last_name: 'Seed',
  location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
  user_id: mike.id,
  profile_picture: File.new('public/images/mike.jpg')
)

jack.save
diane.save
ted.save
mike.save

jack.profile.save
diane.profile.save
ted.profile.save
mike.profile.save

Friendship.create!(
  user_id: jack.id,
  friend_id: diane.id,
  accepted: true
)

Friendship.create!(
  user_id: jack.id,
  friend_id: ted.id,
  accepted: true
)

Friendship.create!(
  user_id: diane.id,
  friend_id: ted.id,
  accepted: true
)

Friendship.create!(
  user_id: mike.id,
  friend_id: jack.id,
)

Friendship.create!(
  user_id: mike.id,
  friend_id: diane.id
)

50.times do
  post = Post.create!(
    author_id: [jack.id, ted.id, diane.id].sample,
    profile_id: [jack.id, ted.id, diane.id].sample,
    body: Faker::Hipster.sentences.join,
  )

  # UNHOLY
  if [false, false, true].sample
    post.photo = 'http://lorempixel.com/g/400/400/'
    post.save
  end
end

50.times do
  begin
    Like.create!(
      user_id: [jack.id, ted.id, diane.id].sample,
      likeable_id: Post.all.sample.id,
      likeable_type: 'Post'
    )
  rescue
  end
end

50.times do
  Comment.create!(
    body: Faker::Hipster.sentence,
    commentable_id: Post.all.sample.id,
    commentable_type: 'Post',
    author_id: [jack.id, ted.id, diane.id].sample
  )
end

50.times do
  Comment.create!(
    body: Faker::Hipster.sentence,
    commentable_id: Comment.where(commentable_type: 'Post').sample.id,
    commentable_type: 'Comment',
    author_id: [jack.id, ted.id, diane.id].sample
  )
end

post = Post.create!(
  author_id: ted.id,
  profile_id: jack.profile.id,
  body: 'Hey Jack, how are you?'
)

post = Post.create!(
  author_id: ted.id,
  profile_id: diane.profile.id,
  body: 'Diane, you are never going to believe what Jack said!'
)

post = Post.create!(
  author_id: ted.id,
  profile_id: ted.profile.id,
  body: 'My email is ted@fauxbook.com and my password is \'password\'! I hope no one logs in as me!'
)

post = Post.create!(
  author_id: jack.id,
  profile_id: jack.profile.id,
  body: 'Welcome to Fauxbook! There are so many things to do!'
)

comment = Comment.create!(
  body: 'You can switch between Jack and mine\'s accounts on the main page!',
  commentable_id: post.id,
  commentable_type: 'Post',
  author_id: diane.id
)

comment_two = Comment.create!(
  body: 'Have us comment and like on posts! Add and remove us as friends. Give me a profile picture! Have fun!',
  commentable_id: comment.id,
  commentable_type: 'Comment',
  author_id: jack.id
)

like = Like.create!(
  user_id: diane.id,
  likeable_id: comment_two.id,
  likeable_type: 'Comment'
)
