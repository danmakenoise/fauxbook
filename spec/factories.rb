FactoryGirl.define do
  factory :user do
    email {Faker::Internet.email}
    password 'password'
    association :profile, factory: :profile
  end

  factory :profile do
    gender {['M', 'F'].sample}
    birthday {(13..100).to_a.sample.years.ago}
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    location {"#{Faker::Address.city}, #{Faker::Address.state_abbr}"}
  end
end
