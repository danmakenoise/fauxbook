class User < ActiveRecord::Base
  validate :email, :password, :password_digest, :session_token
  validates_format_of :email, with: /.+@.+\.+/
  validates_uniqueness_of :email, :session_token

  after_initialize :ensure_session_token

  def password= password
    self.password_digest = BCrypt::Password.create password
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end
end
