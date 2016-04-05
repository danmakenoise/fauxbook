class Api::CommentsController < ApplicationController
  def create
    target = determine_target params

    comment = target.comments.build comment_params
    comment.author = current_user

    if comment.save
      render json: comment
    end
  end

  def index
    if params[:id]
      target = determine_target params
      @comments = target.comments
    elsif params[:ids]
      post_ids = params[:ids]

      comments = Comment
        .includes( author: :profile )
        .where( "commentable_id IN (?) AND commentable_type = 'Post'", post_ids )
      comment_ids = comments.map &:id

      sub_comments = Comment
        .includes( author: :profile )
        .where( "commentable_id IN (?) AND commentable_type = 'Comment'", comment_ids )
      @comments = comments + sub_comments
    end

    render :index
  end

  def destroy
    comment = Comment.find params[:id]
    comment.destroy

    render json: comment
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
