NotificationActions = require( '../actions/notification_actions' );
var Faye = require ('faye/browser/faye-browser.js');

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

  subscribe: function (userId) {
    var pushClient = new Faye.Client('http://localhost:9292/faye');
    var subscription = pushClient.subscribe('/' + userId, function(data) {
      if (data.text === 'NEW_NOTIFICATION') {
        NotificationUtil.fetchNotifications();
      }
    });
  }
};

module.exports = NotificationUtil;
