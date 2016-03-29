User.create! email: 'fauxbook@fauxbook.com', password: 'password'

10.times do
  User.create! email: Faker::Internet.email, password: 'password'
end
