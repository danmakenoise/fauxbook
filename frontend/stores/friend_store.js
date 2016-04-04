var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var FriendConstants = require( '../constants/friend_constants' );
var APIUtil = require( '../utils/api_util' );

var Store = require( 'flux/utils' ).Store;

var FriendStore = new Store( AppDispatcher );

var _friends = [];
var _profileId = null;
var _onOwnPage = null;

FriendStore.all = function () {
  return _friends.slice();
};

FriendStore.empty = function () {
  _friends = [];
};

FriendStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case FriendConstants.FRIENDS_RECEIVED:
    _receiveFriends( payload.friends, payload.onOwnPage, payload.profileId );
    break;
  case FriendConstants.FRIEND_REMOVED:
    _removeFriend( payload.friend );
    break;
  case FriendConstants.FRIEND_ADDED:
    _addFriend( payload.friend );
    break;
  default:
    //no-op
  }
};

var _addFriend = function ( friend ) {
  if ( _profileId && friend.friend_id === _profileId ) {
    APIUtil.fetchFriends( _profileId, _onOwnPage );
  }
};

var _receiveFriends = function ( friends, onOwnPage, profileId ) {
  _profileId = profileId;
  _friends = friends;
  _onOwnPage = onOwnPage;
  FriendStore.__emitChange();
};

var _removeFriend = function ( friend ) {
  if ( _profileId && _onOwnPage || friend.friend_id === _profileId ) {
    APIUtil.fetchFriends( _profileId, _onOwnPage );
  }
};
module.exports = FriendStore;
