var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var ProfileConstants = require( '../constants/profile_constants' );
var SessionConstants = require( '../constants/session_constants' );

var APIActions = {
  logOut: function ( callback ) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SESSION_DESTROYED,
      callback: callback
    });
  },

  receiveCurrentUser: function ( currentUser ) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  receiveProfile: function ( profile ) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      profile: profile
    });
  }
};

module.exports = APIActions;
