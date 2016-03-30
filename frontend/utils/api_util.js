var APIActions = require( '../actions/api_actions' );

var APIUtil = {
  fetchProfile: function () {
    $.get({
      url: 'api/profile',
      dataType: 'json',
      success: function ( profile ) {
        APIActions.receiveProfile( profile );
      }
    });
  },

  updateProfile: function ( formData, callback ) {
    $.ajax({
      type: 'PATCH',
      url: 'api/profile',
      dataType: 'json',
      data: formData,
      success: function ( profile ) {
        APIActions.receiveProfile( profile );
        callback();
      }
    });
  }
};

module.exports = APIUtil;
