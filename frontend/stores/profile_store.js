var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var ProfileConstants = require( '../constants/profile_constants' );

var Store = require( 'flux/utils' ).Store;

var ProfileStore = new Store( AppDispatcher );
var _profile = {};

ProfileStore.userId = function () {
  return _profile.user_id;
}

ProfileStore.getProfile = function () {
  var profile = {};

  Object.keys( _profile ).forEach( function ( key ) {
    profile[key] = _profile[key];
  });

  return profile;
};

ProfileStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case ProfileConstants.PROFILE_RECEIVED:
    _receiveProfile( payload.profile );
    break;
  default:
    // no-op
  }
};

var _receiveProfile = function ( profile ) {
  _profile = profile;
  ProfileStore.__emitChange();
};

module.exports = ProfileStore;
