var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var FriendConstants = require( '../constants/friend_constants' );

var FriendActions = {
  addFriend: function ( friend ) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.FRIEND_ADDED,
      friend: friend
    });
  },

  removeFriend: function ( friend, onOwnPage ) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.FRIEND_REMOVED,
      friend: friend,
      onOwnPage: onOwnPage
    });
  },
};

module.exports = FriendActions;
