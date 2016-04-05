class CommentsController < ApplicationController
  def create
    if params[:post_id]
      target = Post.find params[:post_id]
    elsif params[:comment_id]
      target = Comment.find params[:comment_id]
    end

    comment = target.comments.build comment_params
    comment.author = current_user

    if comment.save
      render json: comment
    end
  end

  def destroy
    comment = Comment.find params[:id]
    comment.destroy

    render json: comment
  end
end
