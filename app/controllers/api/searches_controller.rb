class Api::SearchesController < ApplicationController
  def index
    search_string = "%#{params[:query]}%"
    @users = User.joins( :profile ).where(
      "profiles.first_name LIKE ? OR profiles.last_name LIKE ?",
      search_string,
      search_string
    ).limit(10)

    render :index
  end
end
