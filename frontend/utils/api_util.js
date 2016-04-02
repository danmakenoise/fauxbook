var APIActions = require( '../actions/api_actions' );

var APIUtil = {
  createPost: function ( data, callback ) {
    $.ajax({
      type: 'POST',
      url: 'api/posts',
      dataType: 'json',
      data: data,
      cache: false,
      processData: false,
      contentType: false,
      success: function ( post ) {
        APIActions.receivePost( post );
        callback();
      },
    });
  },

  createUser: function ( formData, callback ) {
    $.ajax({
      type: 'POST',
      url: 'api/users',
      dataType: 'json',
      data: formData,
      success: function ( currentUser ) {
        APIActions.receiveCurrentUser( currentUser );
        callback();
      }
    });
  },

  deletePost: function ( postId ) {
    $.ajax({
      type: 'DELETE',
      url: 'api/posts/' + postId,
      dataType: 'json',
      success: function ( post ) {
        APIActions.removePost( post );
      }
    });
  },

  fetchPosts: function ( profileId ) {
    $.get({
      url: 'api/posts',
      dataType: 'json',
      data: { profileId: profileId },
      success: function ( posts ) {
        APIActions.receivePosts( posts );
      }
    });
  },

  fetchProfile: function ( targetProfile ) {
    $.get({
      url: 'api/profile',
      dataType: 'json',
      data: { id: targetProfile },
      success: function ( profile ) {
        APIActions.receiveProfile( profile );
      }
    });
  },

  fetchCurrentUser: function ( completion ) {
    $.ajax({
      type: 'GET',
      url: 'api/session',
      dataType: 'json',
      success: function ( currentUser ) {
        APIActions.receiveCurrentUser( currentUser );
      },
      complete: function() {
        completion && completion();
      }
    });
  },

  logInUser: function ( formData, callback ) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      dataType: 'json',
      data: formData,
      success: function ( currentUser ) {
        APIActions.receiveCurrentUser( currentUser );
        callback();
      }
    });
  },

  logOut: function ( callback ) {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: function () {
        APIActions.logOut( callback );
      }
    });
  },

  search: function ( searchString ) {
    $.ajax({
      type: 'GET',
      url: 'api/search',
      data: { query: searchString },
      success: function ( results ) {
        APIActions.receiveSearchResults( results );
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
