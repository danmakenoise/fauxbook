class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by session_token: session[:session_token]
  end

  def create_notification_for item
    name = "#{current_user.profile.first_name} #{current_user.profile.last_name}"
    users = []
    messages = []

    if item.class == Post
      users.push item.profile.user
      messages.push "#{name} Posted on Your Profile"
      post = item
    elsif item.class == Comment
      if item.commentable_type == 'Post'
        users.push item.commentable.user
        messages.push "#{name} Commented on Your Post"
        post = item.commentable
      elsif item.commentable_type == 'Comment'
        users.push item.commentable.author
        messages.push "#{name} Replied To Your Comment"
        post = item.commentable.commentable
        if item.commentable.commentable.author != item.commentable.author
          users.push item.commentable.commentable.author
          messages.push "#{name} Commented On A Reply To Your Post"
        end
      end
    elsif item.class == Like
      if item.likeable_type == 'Post'
        users.push item.likeable.author
        messages.push "#{name} Liked Your Post"
        post = item.likeable
      elsif item.likeable_type == 'Comment'
        users.push item.likeable.author
        messages.push "#{name} Liked Your Comment"
        post = item.likeable.commentable
      end
    end

    until users.empty?
      body = messages.shift
      user = users.shift
      Notification.create! ({
        author_id: current_user.id,
        user_id: user.id,
        post_id: post.id,
        body: body,
        seen: false
      })
    end
  end

  def logged_in?
    !!current_user
  end

  def log_in! user
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
