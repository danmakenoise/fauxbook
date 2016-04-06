class Api::LikesController < ApplicationController
  def create
    targetItem = determine_target params
    like = targetItem.likes.build user_id: current_user.id
    like.save
    create_notification_for like if targetItem.author_id != current_user.id

    render json: like
  end

  def destroy
    target = determine_target params
    targetLike = target.likes.where( 'user_id = ?', current_user.id ).first
    targetLike.destroy
    render json: targetLike
  end

  private

  def determine_target params
    if params[:post_id]
      return Post.find params[:post_id]
    elsif params[:comment_id]
      return Comment.find params[:comment_id]
    end
  end
end
