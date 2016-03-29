class StaticPagesController < ApplicationController
  before_action :ensure_logged_in

  def root
    render :root
  end

  private

  def ensure_logged_in
    redirect_to login_url unless logged_in?
  end
end
