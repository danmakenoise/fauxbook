class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    email = params[:user][:email]
    password = params[:user][:password]

    user = User.find_by_credentials email, password

    if user
      log_in! user
      redirect_to :root
    else
      render :new
    end
  end

  def destroy
    log_out!
    redirect_to :root
  end
end
