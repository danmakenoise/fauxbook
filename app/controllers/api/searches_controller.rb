class Api::SearchesController < ApplicationController
  def index
    @users = User.search params[:query]
    render :index
  end
end
