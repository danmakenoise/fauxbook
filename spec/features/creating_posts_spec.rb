describe 'posts', js: true do
  it 'creates posts' do
    post = sign_in_and_post
    expect(page).to have_content(post)
  end

  it 'allows deletion of posts' do
    post = sign_in_and_post
    click_on 'Delete'
    click_on 'Are You Sure?'
    expect(page).not_to have_content(post)
  end

  it 'allows posting on others profiles if they are friends' do
    user = sign_in
    log_out
    other_user = sign_in
    visit_user(user)
    click_on 'Add Friend'
    log_out
    sign_in(user)
    visit_user(other_user)
    click_on 'Approve Request'
    visit_user(other_user)
    post = create_post
    visit_user(other_user)
    expect(page).to have_content(other_user.profile.first_name)
    expect(page).to have_content(post)
  end

  it 'does not allow posting on profiles if they are not friends' do
    user = sign_in
    log_out
    other_user = sign_in
    visit_user(user)
    post = create_post
    expect(page).to have_content(other_user.profile.first_name)
    expect(page).not_to have_content(post)
  end
end

def create_post
  post = Faker::Hipster.sentences.join
  fill_in 'post[body]', with: post
  click_on 'Post'

  post
end

def sign_in_and_post
  user = sign_in
  create_post
end
