var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var FriendConstants = require( '../constants/friend_constants' );

var Store = require( 'flux/utils' ).Store;

var FriendStore = new Store( AppDispatcher );

var _friends = [];

FriendStore.all = function () {
  return _friends.slice();
};

FriendStore.empty = function () {
  _friends = [];
};

FriendStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case FriendConstants.FRIENDS_RECEIVED:
    _receiveFriends( payload.friends );
    break;
  case FriendConstants.FRIEND_REMOVED:
    _removeFriend( payload.friend, payload.onOwnPage );
    break;
  default:
    //no-op
  }
};

var _receiveFriends = function ( friends ) {
  _friends = friends;
  FriendStore.__emitChange();
};

var _removeFriend = function ( friend, onOwnPage ) {
  if ( onOwnPage ) {
    debugger;
  }
};
module.exports = FriendStore;
