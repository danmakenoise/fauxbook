var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var NotificationConstants = require( '../constants/notification_constants' );

var NotificationActions = {
  receiveNotifications: function ( notifications ) {
    AppDispatcher.dispatch({
      actionType: NotificationConstants.NOTIFICATIONS_RECEIVED,
      notifications: notifications
    });
  }
};

module.exports = NotificationActions;
