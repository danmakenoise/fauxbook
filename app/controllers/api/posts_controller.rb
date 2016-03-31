class Api::PostsController < ApplicationController
  before_filter :ensure_logged_in

  def index
    @posts = Post.where( profile_id: params['profileId'] ).order( created_at: :desc )
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

  private

  def post_params
    params.require( :post ).permit :body, :profile_id
  end

  def ensure_logged_in
    unless logged_in?
      render text: 'unauthorized', status: 401
    end
  end
end
