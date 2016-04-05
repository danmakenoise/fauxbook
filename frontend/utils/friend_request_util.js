var FriendRequestActions = require( '../actions/friend_request_actions' );

var FriendRequestUtil = {
  approveRequest: function ( user_id, callback ) {
    $.ajax({
      url: 'api/friendships/' + user_id,
      type: 'PATCH',
      dataType: 'json',
      success: function ( friend ) {
        this.fetchRequests();
        callback && callback();
      }.bind( this )
    });
  },

  denyRequest: function ( user_id ) {
    $.ajax({
      url: 'api/friendships/' + user_id,
      type: 'DELETE',
      dataType: 'json',
      success: function ( friend ) {
        this.fetchRequests();
      }.bind( this )
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
