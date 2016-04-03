var FriendActions = require( '../actions/friend_actions' );

var FriendUtil = {
  addFriend: function ( friendId, callback ) {
    $.ajax({
      type: 'POST',
      data: { friend_id: friendId },
      dataType: 'json',
      url: 'api/friendships',
      success: function ( friend ) {
        FriendActions.addFriend( friend );
        callback();
      }
    });
  },

  removeFriend: function ( friendId, callback ) {
    $.ajax({
      type: 'DELETE',
      url: 'api/friendships/' + friendId,
      dataType: 'json',
      success: function ( friend ) {
        FriendActions.removeFriend( friend );
        callback();
      }
    });

  }
};

module.exports = FriendUtil;
