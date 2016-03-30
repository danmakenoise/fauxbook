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
  },

  uploadProfilePicture: function ( files ) {
    var data = new FormData();
    $.each( files, function( key, value ) {
      data.append( key, value );
    });

    $.ajax({
      type: 'PATCH',
      url: 'api/profile/photoupload',
      dataType: 'json',
      data: data,
      cache: false,
      processData: false,
      contentType: false,
      success: function( profile ) {
        APIActions.receiveProfile( profile );
      }
    });
  },

  uploadCoverPicture: function ( files ) {
    var data = new FormData();
    $.each( files, function( key, value ) {
      data.append( key, value );
    });

    $.ajax({
      type: 'PATCH',
      url: 'api/profile/coverphotoupload',
      dataType: 'json',
      data: data,
      cache: false,
      processData: false,
      contentType: false,
      success: function( profile ) {
        APIActions.receiveProfile( profile );
      }
    });
  }
};

module.exports = APIUtil;
