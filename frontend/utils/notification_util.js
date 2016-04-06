NotificationActions = require( '../actions/notification_actions' );

var NotificationUtil = {
  fetchNotifications: function () {
    $.ajax({
      url: 'api/notifications',
      dataType: 'json',
      success: function ( notifications ) {
        NotificationActions.receiveNotifications( notifications );
      }
    });
  },

  markAllAsSeen: function () {
    $.ajax({
      method: 'PATCH',
      url: 'api/notifications',
      dataType: 'json',
      success: function ( notifications ) {
        NotificationActions.receiveNotifications( notifications );
      }
    });
  },
};

module.exports = NotificationUtil;
