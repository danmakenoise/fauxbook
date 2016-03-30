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

  def photo_upload
    new_profile_picture = params['0']
    @profile = current_user.profile
    @profile.profile_picture = new_profile_picture
    @profile.save
    render :show
  end

  def cover_photo_upload
    new_cover_photo = params['0']
    @profile = current_user.profile
    @profile.cover_photo = new_cover_photo
    @profile.save
    render :show
  end

  private

  def profile_params
    params.require( :profile ).permit( :gender, :birthday, :location )
  end
end
