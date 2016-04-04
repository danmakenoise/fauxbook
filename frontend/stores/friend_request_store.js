var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var FriendRequestConstants = require( '../constants/friend_request_constants' );

var Store = require( 'flux/utils' ).Store;

var FriendRequestStore = new Store( AppDispatcher );

var _friendRequests = [];

FriendRequestStore.all = function () {
  return _friendRequests.slice();
};

FriendRequestStore.count = function () {
  return _friendRequests.length;
};

FriendRequestStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case FriendRequestConstants.REQUESTS_RECEIVED:
    _receiveFriendRequests( payload.requests );
    break;
  default:
    //no-op
  }
};

_receiveFriendRequests = function ( requests ) {
  _friendRequests = requests;
  FriendRequestStore.__emitChange();
};

module.exports = FriendRequestStore;
