var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var FriendConstants = require( '../constants/friend_constants' );

var Store = require( 'flux/utils' ).Store;

var FriendStore = new Store( AppDispatcher );

var _friends = [];

FriendStore.all = function () {
  return _friends.slice();
};

FriendStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case FriendConstants.FRIENDS_RECEIVED:
    _receiveFriends( payload.friends );
    break;
  default:
    //no-op
  }
};

var _receiveFriends = function ( friends ) {
  _friends = friends;
  FriendStore.__emitChange();
};

module.exports = FriendStore;
