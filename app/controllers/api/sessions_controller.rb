class Api::SessionsController < ApplicationController

  def show
    if current_user
      @user = current_user
      render :show
    else
      render json: { errors: "not logged in" }
    end
  end

  def create
    email = params[:user][:email]
    password = params[:user][:password]

    user = User.find_by_credentials email, password

    if user
      log_in! user
      @user = user
      render :show
    else
      render json: { errors: ['Invalid Username or Password'] }
    end
  end

  def destroy
    log_out!
    render text: 'logged out', status: 200
  end
end
