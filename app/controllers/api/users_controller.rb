class Api::UsersController < ApplicationController
  def create
    user = User.new user_params
    user.profile = Profile.new profile_params

    if user.save
      user.profile.user_id = user.id
      user.profile.save
      log_in! user
      @user = user
      render :show
    else
      render text: 'invalid information', status: 422
    end
  end

  def friends
    @friends = User.find( params[:id] ).friends
    @user_friends = current_user.friends

    render :friends
  end

  def friend_requests
    @friends = current_user.friend_requests.order( created_at: :desc )
    render :friends
  end

  private

  def user_params
    params.require( :user ).permit :email, :password
  end

  def profile_params
    params.require( :profile ).permit :first_name, :last_name, :birthday, :gender
  end
end
