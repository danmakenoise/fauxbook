var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var NotificationConstants = require( '../constants/notification_constants' );

var NotificationActions = {
  receiveNotifications: function ( notifications ) {
    AppDispatcher.dispatch({
      actionType: NotificationConstants.NOTIFICATIONS_RECEIVED,
      notifications: notifications
    });
  },

  markAllAsSeen: function () {
    AppDispatcher.dispatch({
      actionType: NotificationConstants.MARK_ALL_AS_SEEN
    });
  }
};

module.exports = NotificationActions;
