class Api::ProfilesController < ApplicationController
  def show
    if params[:id]
      @profile = Profile.find_by user_id: params[:id]
    else
      @profile = current_user.profile
    end

    render :show
  end

  def update
    @profile = current_user.profile
    if params[:profile][:birthday_month]
      @profile.birthday = get_birthday params
    end
    @profile.update!( profile_params );
    render :show
  end

  def photo_upload
    new_profile_picture = params['0']
    @profile = current_user.profile
    @profile.profile_picture = new_profile_picture
    if @profile.save
      render :show
    else
      render json: { errors: ['There was an error processing your image.'] }
    end
  end

  def cover_photo_upload
    new_cover_photo = params['0']
    @profile = current_user.profile
    @profile.cover_photo = new_cover_photo
    @profile.save
    if @profile.save
      render :show
    else
      render json: { errors: ['There was an error processing your image.'] }
    end
  end

  private

  def profile_params
    params.require( :profile ).permit( :gender, :location )
  end
end
