class Api::ProfilesController < ApplicationController
  def show
    @profile = current_user.profile
    render :show
  end

  def update
    @profile = current_user.profile
    @profile.update!( profile_params );
    render :show
  end

  def photoupload
    new_profile_picture = params['0']
    @profile = current_user.profile
    @profile.profile_picture = new_profile_picture
    @profile.save
    render :show
  end

  private

  def profile_params
    params.require( :profile ).permit( :gender, :birthday, :location )
  end
end
