var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var ErrorConstants = require( '../constants/error_constants' );

var Store = require( 'flux/utils' ).Store;

var ErrorStore = new Store( AppDispatcher );
var _errors = [];

ErrorStore.all = function () {
  return _errors.slice();
};

ErrorStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case ErrorConstants.RECEIVE_ERRORS:
    _errors = payload.errors;
    this.__emitChange();
    break;
  default:
    // no-op
  }
};

module.exports = ErrorStore;
