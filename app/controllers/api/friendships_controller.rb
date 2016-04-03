class Api::FriendshipsController < ApplicationController
  def create
    friendship = Friendship.create(
      user_id: current_user.id,
      friend_id: params[:friend_id]
    )

    render json: friendship
  end

  def update
    friendship = Friendship.find(
      user_id: current_user.id,
      friend_id: params[:friend_id]
    )

    friendship.accept!
    render json: friendship
  end

  def destroy
    friendship = Friendship.find(
      user_id: current_user.id,
      friend_id: params[:friend_id]
    )

    friendship.remove!
    render json: friendship
  end
end
