describe 'the sign up process' do
  it 'creates an account for me' do
    visit '/'
    fill_in 'First Name', with: 'Test'
    fill_in 'Last Name', with: 'Test'
    save_and_open_page
  end
end
