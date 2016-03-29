var APIActions = require( '../actions/api_actions' );

var APIUtil = {
  fetchProfile: function () {
    $.get({
      url: '/profile',
      dataType: 'json',
      success: function ( profile ) {
        APIActions.receiveProfile( profile );
      }
    });
  }
};

module.exports = APIUtil;
