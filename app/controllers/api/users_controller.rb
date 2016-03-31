class Api::UsersController < ApplicationController
  def create
    debugger
    user = User.new user_params
    user.profile = Profile.new profile_params

    if user.save
      user.profile.user_id = user.id
      user.profile.save
      log_in! user
      render json: current_user
    else
      render text: 'invalid information', status: 422
    end
  end

  private

  def user_params
    params.require( :user ).permit :email, :password
  end

  def profile_params
    params.require( :profile ).permit :first_name, :last_name, :birthday, :gender
  end
end
