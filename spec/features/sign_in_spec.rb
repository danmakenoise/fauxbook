describe 'the sign up/sign in process', js: true do
  before :each do
    test_user = User.new email: 'test@fauxbook.com', password: 'password'
    test_user.profile = Profile.new(
      gender: 'M',
      birthday: (13..100).to_a.sample.years.ago,
      first_name: 'Tester',
      last_name: 'Testerson',
      location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}",
      user_id: test_user.id,
    )
    test_user.save
    test_user.profile.save
  end

  it 'creates an account for me' do
    visit '/'
    fill_in 'profile[first_name]', with: 'Marty'
    fill_in 'profile[last_name]', with: 'McFly'
    within '.sign-up' do
      fill_in 'user[email]', with: 'test@test.com'
      fill_in 'user[password]', with: 'password'
    end
    select 'August', from: 'profile[birthday_month]'
    select '23', from: 'profile[birthday_day]'
    select '1983', from: 'profile[birthday_year]'
    choose 'male'
    click_on 'Sign Up'
    expect(page).to have_content('Marty', count: 2)
  end

  it 'lets me sign back in' do
    visit '/'
    within '.sign-in' do
      fill_in 'user[email]', with: 'test@fauxbook.com'
      fill_in 'user[password]', with: 'password'
    end
    click_on 'Log In'
    expect(page).to have_content('Tester', count: 2)
  end

  it 'lets me log out' do
    visit '/'
    within '.sign-in' do
      fill_in 'user[email]', with: 'test@fauxbook.com'
      fill_in 'user[password]', with: 'password'
    end
    click_on 'Log In'
    click_on 'Log Out'
    page.reset!
    visit '/'
    expect(page).not_to have_content('Tester')
  end
end
