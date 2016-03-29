class User < ActiveRecord::Base
  validate :email, :password_digest, :session_token
  validates_format_of :email, with: /.+@.+\.+/
  validates_uniqueness_of :email, :session_token
end
