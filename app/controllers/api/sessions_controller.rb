class Api::SessionsController < ApplicationController
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
    redirect_to :root
  end
end
