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
end

def sign_in_and_post
  user = sign_in
  post = Faker::Hipster.sentences.join
  fill_in 'post[body]', with: post
  click_on 'Post'

  post
end
