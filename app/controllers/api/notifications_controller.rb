class Api::NotificationsController < ApplicationController
  def index
    @notifications = current_user
      .notifications
      .includes( author: :profile )
      .order( created_at: :desc )

    render :index
  end

  def all_seen
    ActiveRecord::Base.transaction do
      current_user.notifications.each do |notification|
        notification.seen = true
        notification.save
      end
    end

    index
  end
end
