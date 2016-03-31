class Api::SessionsController < ApplicationController

  def show
    if current_user
      render json: current_user
    else
      render text: 'not logged in', status: 401
    end
  end

  def create
    email = params[:user][:email]
    password = params[:user][:password]

    user = User.find_by_credentials email, password

    if user
      log_in! user
      render json: current_user
    else
      render text: 'bad credentials', status: 401
    end
  end

  def destroy
    log_out!
    render text: 'logged out', status: 200
  end
end
