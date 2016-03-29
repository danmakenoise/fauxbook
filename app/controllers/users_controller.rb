class UsersController < ApplicationController
  def create
    user = User.new user_params
    if user.save
      log_in! user
      redirect_to :root
    else
      redirect_to login_url
    end
  end

  private

  def user_params
    params.require( :user ).permit :email, :password
  end
end
