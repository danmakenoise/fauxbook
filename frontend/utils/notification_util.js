// NotificationActions = require( '../actions/notification_actions' );

var NotificationUtil = {
  fetchNotifications: function () {
    $.ajax({
      url: 'api/notifications',
      dataType: 'json',
      success: function ( notifications ) {
        debugger;
        console.log( notifications );
      }
    });
  }
};

module.exports = NotificationUtil;
