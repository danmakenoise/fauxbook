describe 'the sign up process', js: true do
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
end
