var FriendRequestActions = require( '../actions/friend_request_actions' );
var Faye = require ('faye/browser/faye-browser.js');

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
  },

  subscribe: function (userId) {
    var pushClient = new Faye.Client('http://localhost:9292/faye');
    var subscription = pushClient.subscribe('/' + userId, function(data) {
      FriendRequestUtil.fetchRequests();
    });
  }
};

module.exports = FriendRequestUtil;
