var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var SessionConstants = require( '../constants/session_constants' );
var Store = require( 'flux/utils' ).Store;

var SessionStore = new Store( AppDispatcher );

var _currentUser = null;

SessionStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case SessionConstants.CURRENT_USER_RECEIVED:
    _receiveCurrentUser( payload.currentUser );
    break;
  default:
    // no-op
  }
};

var _receiveCurrentUser = function ( currentUser ) {
  console.log( 'Logged in' );
  _currentUser = currentUser;
};

module.exports = SessionStore;
