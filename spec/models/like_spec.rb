describe Like do
  let(:user) { FactoryGirl.create(:user) }

  before(:each) {
    @post = create_post_for(user)
  }

  it 'belongs to a user' do
    like = @post.likes.build(user_id: user.id)

    expect(like.user).to eq(user)
  end

  it 'can belong to a post' do
    like = create_like_for(@post)

    expect(like.likeable).to eq(@post)
  end

  it 'can belong to a comment' do
    comment = create_comment_for(@post)
    like = create_like_for(comment)

    expect(like.likeable).to eq(comment)
  end

  it 'is deleted upon user deletion' do
    comment = create_comment_for(@post)
    like = create_like_for(comment)
    count = Like.count
    user.destroy

    expect(Like.count).to eq(count - 1)
  end

  it 'is deleted upon post deletion' do
    like = create_like_for(@post)
    count = Like.count
    @post.destroy

    expect(Like.count).to eq(count - 1)
  end

  it 'is deleted upon comment deletion' do
    comment = create_comment_for(@post)
    like = create_like_for(comment)
    count = Like.count
    @post.destroy

    expect(Like.count).to eq(count - 1)
  end

  it 'is delete upon deletion of the parent post when on a comment' do
    comment = create_comment_for(@post)
    like = create_like_for(comment)
    count = Like.count
    @post.destroy

    expect(Like.count).to eq(count - 1)
  end
  
  private

  def create_post_for(user)
    Post.create!(
      author_id: user.id,
      profile_id: user.profile.id,
      body: 'suh dude'
    )
  end

  def create_comment_for(commentable)
    commentable.comments.create(
      author_id: user.id,
      body: 'suh dude'
    )
  end

  def create_like_for(likeable)
    likeable.likes.create(
      user_id: user.id
    )
  end
end
