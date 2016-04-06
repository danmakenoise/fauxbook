var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var NotificationConstants = require( '../constants/notification_constants' );

var Store = require( 'flux/utils' ).Store;

var NotificationStore = new Store( AppDispatcher );

var _notifications = [];

NotificationStore.all = function () {
  return _notifications.slice();
};

NotificationStore.count = function () {
  return _notifications.length;
};

NotificationStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case NotificationConstants.NOTIFICATIONS_RECEIVED:
    _receiveNotifications( payload.notifications );
    break;
  default:
    //no-op
  }
};

_receiveNotifications = function ( notifications ) {
  _notifications = notifications;
  NotificationStore.__emitChange();
};

module.exports = NotificationStore;
