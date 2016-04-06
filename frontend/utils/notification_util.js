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
  }
};

module.exports = NotificationUtil;
