# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)
run Rails.application

Thread.new do
  system("rackup faye.ru -s thin -E production")
end
