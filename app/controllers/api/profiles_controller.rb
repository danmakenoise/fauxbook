class Api::ProfilesController < ApplicationController
  def show
    @profile = current_user.profile
    render :show
  end

  def update
    current_user.profile.update!( profile_params );
    render json: current_user.profile
  end

  private

  def profile_params
    params.require( :profile ).permit( :gender, :birthday, :location )
  end
end
