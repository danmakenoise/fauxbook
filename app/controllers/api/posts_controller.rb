class Api::PostsController < ApplicationController
  before_filter :ensure_logged_in

  def index
    @posts = Post.where( profile_id: params['profileId'] ).includes( author: :profile ).order( created_at: :desc )
    render :index
  end

  def create
    @post = Post.new( post_params )
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render text: 'something went wrong', status: 422
    end
  end

  def feed
    friend_ids = current_user.friends.map &:id
    valid_ids = friend_ids.push current_user.id
    valid_profile_ids = current_user.friends.includes( :profile ).map do |friend|
      friend.profile.id
    end

    @posts = Post.includes( :author ).where(
      'posts.author_id IN (?) OR posts.profile_id IN (?)',
      valid_ids,
      valid_profile_ids
    )

    render :index
  end

  def destroy
    @post = Post.find( params[:id] )
    if @post.author_id == current_user.id
      @post.destroy
      render :show
    else
      render text: 'unauthorized', status: 401
    end
  end

  private

  def post_params
    params.require( :post ).permit :body, :profile_id, :photo
  end

  def ensure_logged_in
    unless logged_in?
      render text: 'unauthorized', status: 401
    end
  end
end
