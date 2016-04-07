var APIActions = require( '../actions/api_actions' );
var ErrorActions = require( '../actions/error_actions' );
var ErrorHelper = require( './helpers/error_helper' );

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
        ErrorHelper.checkForErrors( post, APIActions.receivePost );
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
        ErrorHelper.checkForErrors( currentUser, function () {
          APIActions.receiveCurrentUser( currentUser );
          callback();
        });
      },
    });
  },

  deletePost: function ( postId ) {
    $.ajax({
      type: 'DELETE',
      url: 'api/posts/' + postId,
      dataType: 'json',
      success: function ( post ) {
        APIActions.removePost( post );
      },
      error: function ( response ) {
        if ( response.status === 404 ) {
          ErrorActions.receiveErrors( ['Post has already been deleted'] );
          APIActions.removePost( {id: postId} );
        } else {
          ErrorActions.apiError();
        }
      }
    });
  },

  fetchFriends: function ( friendId, onOwnPage ) {
    $.ajax({
      type: 'GET',
      url: 'api/users/' + friendId + '/friends',
      dataType: 'json',
      success: function ( friends ) {
        APIActions.receiveFriends( friends, onOwnPage, friendId );
      }
    });
  },

  fetchPosts: function ( profileId, callback ) {
    $.get({
      url: 'api/posts',
      dataType: 'json',
      data: { profileId: profileId },
      success: function ( posts ) {
        APIActions.receivePosts( posts );
        callback && callback( posts.ids );
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
        if ( !currentUser.errors ) {
          APIActions.receiveCurrentUser( currentUser );
        }
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
        if ( currentUser.errors ) {
          ErrorActions.receiveErrors( currentUser.errors );
        } else {
          APIActions.receiveCurrentUser( currentUser );
          callback();
        }
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
        ErrorHelper.checkForErrors( profile, APIActions.receiveProfile );
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
        ErrorHelper.checkForErrors( profile, APIActions.receiveProfile );
      }
    });
  }
};

module.exports = APIUtil;
