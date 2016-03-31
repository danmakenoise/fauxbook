class Api::PostsController < ApplicationController
  before_filter :ensure_logged_in

  def index
    @posts = Post.where( profile_id: params['profileId'] )
    render :index
  end

  private

  def ensure_logged_in
    unless logged_in?
      render text: 'unauthorized', status: 401
    end
  end
end
