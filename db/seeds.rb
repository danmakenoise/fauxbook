jack = User.find_by( email: 'jack@fauxbook.com' )
diane = User.find_by( email: 'diane@fauxbook.com' )
ted = User.find_by( email: 'ted@fauxbook.com' )

jack.destroy if jack
jack = User.new email: 'jack@fauxbook.com', password: 'password'

diane.destroy if diane
diane = User.new email: 'diane@fauxbook.com', password: 'password'

ted.destroy if ted
ted = User.new email: 'ted@fauxbook.com', password: 'password'

jack.profile = Profile.new(
  gender: 'M',
  birthday: (13..100).to_a.sample.years.ago,
  first_name: 'Jack',
  last_name: 'Sampleton',
  location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
  user_id: jack.id
)

diane.profile = Profile.new(
  gender: 'F',
  birthday: (13..100).to_a.sample.years.ago,
  first_name: 'Diane',
  last_name: 'LeExample',
  location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
  user_id: diane.id
)

ted.profile = Profile.new(
  gender: 'M',
  birthday: (13..100).to_a.sample.years.ago,
  first_name: 'Ted',
  last_name: 'Template',
  location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
  user_id: ted.id
)

jack.save
diane.save
ted.save
jack.profile.save
diane.profile.save
ted.profile.save

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
