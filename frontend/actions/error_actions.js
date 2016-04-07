var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var ErrorConstants = require( '../constants/error_constants' );

var ErrorActions = {
  receiveErrors: function ( errors ) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.RECEIVE_ERRORS,
      errors: errors
    });
  },

  apiError: function () {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.RECEIVE_ERRORS,
      errors: ['Something Went Wrong']
    });
  },
};

module.exports = ErrorActions;
