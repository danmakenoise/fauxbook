var FriendRequestActions = require( '../actions/friend_request_actions' );

var FriendRequestUtil = {
  approveRequest: function ( user_id ) {
    $.ajax({
      url: 'api/friendships/' + user_id,
      type: 'PATCH',
      dataType: 'json',
      success: function ( friend ) {
        console.log( friend );
      }
    });
  },

  denyRequest: function ( user_id ) {
    $.ajax({
      url: 'api/friendships/' + user_id,
      type: 'DELETE',
      dataType: 'json',
      success: function ( friend ) {
        console.log( friend );
      }
    });
  },

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
