seed_users = []

10.times do
  user = User.new email: Faker::Internet.email, password: 'password'
  seed_users << user
end

seed_users.each do |user|
  first_name, last_name = Faker::Name.name.split

  user.profile = Profile.new(
    gender: ['M', 'F'].sample,
    birthday: (13..100).to_a.sample.years.ago,
    first_name: first_name,
    last_name: last_name
  )
  user.save
  user.profile.user_id = user.id
  user.profile.save
end
