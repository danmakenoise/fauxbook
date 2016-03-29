var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var ProfileConstants = require( '../constants/profile_constants' );

var APIActions = {
  receiveProfile: function ( profile ) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      profile: profile
    });
  }
};

module.exports = APIActions;
