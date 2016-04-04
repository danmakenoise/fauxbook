var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var FriendRequestConstants = require( '../constants/friend_request_constants' );

var FriendRequestActions = {
  receiveRequests: function ( requests ) {
    AppDispatcher.dispatch({
      actionType: FriendRequestConstants.REQUESTS_RECEIVED,
      requests: requests
    });
  }
};

module.exports = FriendRequestActions;
