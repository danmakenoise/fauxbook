seed_users = []

100.times do
  user = User.new email: Faker::Internet.email, password: 'password'
  seed_users << user
end

seed_users.each do |user|
  first_name, last_name = Faker::Name.name.split

  user.profile = Profile.new(
    gender: ['M', 'F'].sample,
    birthday: (13..100).to_a.sample.years.ago,
    first_name: first_name,
    last_name: last_name,
    location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}"
  )
  user.save
  user.profile.user_id = user.id
  user.profile.save
end

jack = User.new email: 'jack@fauxbook.com', password: 'password'
diane = User.new email: 'diane@fauxbook.com', password: 'password'

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

jack.save
diane.save
jack.profile.save
diane.profile.save
