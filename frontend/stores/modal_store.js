var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var ModalConstants = require( '../constants/modal_constants' );

var Store = require( 'flux/utils' ).Store;

var ModalStore = new Store( AppDispatcher );

ModalStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case ModalConstants.CLOSE_MODALS:
    this.__emitChange();
    break;
  default:
    // no-op
  }
};

module.exports = ModalStore;
