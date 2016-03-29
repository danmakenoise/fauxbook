class ProfilesController < ApplicationController
  def show
    render json: current_user.profile
  end
end
