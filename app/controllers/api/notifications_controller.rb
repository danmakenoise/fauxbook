class Api::NotificationsController < ApplicationController
  def index
    @notifications = current_user.notifications
    render :index
  end
end
