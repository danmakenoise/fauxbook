var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var ModalConstants = require( '../constants/modal_constants' );

var ModalActions = {
  closeModals: function () {
    AppDispatcher.dispatch({
      actionType: ModalConstants.CLOSE_MODALS,
    });
  }
};

module.exports = ModalActions;
