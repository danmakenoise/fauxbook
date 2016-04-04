var FriendRequestActions = require( '../actions/friend_request_actions' );

var FriendRequestUtil = {
  fetchRequests: function () {
    $.ajax({
      url: 'api/requests',
      dataType: 'json',
      success: function ( requests ) {
        FriendRequestActions.receiveRequests( requests );
      }
    });
  }
};

module.exports = FriendRequestUtil;
