var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var SessionConstants = require( '../constants/session_constants' );
var Store = require( 'flux/utils' ).Store;

var SessionStore = new Store( AppDispatcher );

var _currentUser = null;
var _currentUserFetched = false;

SessionStore.currentUserFetched = function () {
  return _currentUserFetched;
};

SessionStore.isLoggedIn = function () {
  return !!_currentUser;
};

SessionStore.currentUserId = function () {
  return _currentUser.id;
};

SessionStore.userPicture = function () {
  return _currentUser.picture;
};

SessionStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case SessionConstants.CURRENT_USER_RECEIVED:
    _receiveCurrentUser( payload.currentUser );
    break;
  case SessionConstants.SESSION_DESTROYED:
    _destroySession ( payload.callback );
    break;
  default:
    // no-op
  }
};

var _destroySession = function ( callback ) {
  _currentUser = null;
  callback();
};

var _receiveCurrentUser = function ( currentUser ) {
  _currentUserFetched = true;
  _currentUser = currentUser;
};

module.exports = SessionStore;
