class Api::FriendshipsController < ApplicationController
  def create
    friendship = Friendship.create( current_user.id, params[:friend_id] )

    render json: friendship
  end

  def update
    friendship = Friendship.find_by(
      user_id: current_user.id,
      friend_id: params[:id]
    )

    friendship.accept!
    render json: friendship
  end

  def destroy
    friendship = Friendship.find_by(
      user_id: current_user.id,
      friend_id: params[:id]
    )

    friendship.remove!
    render json: friendship
  end
end
