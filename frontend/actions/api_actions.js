var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var ProfileConstants = require( '../constants/profile_constants' );
var SessionConstants = require( '../constants/session_constants' );
var PostConstants = require( '../constants/post_constants' );

var APIActions = {
  logOut: function ( callback ) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SESSION_DESTROYED,
      callback: callback
    });
  },

  receiveCurrentUser: function ( currentUser ) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  receivePost: function ( post ) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  receivePosts: function ( posts ) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveProfile: function ( profile ) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      profile: profile
    });
  },

  removePost: function ( post ) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_REMOVED,
      post: post
    });
  }
};

module.exports = APIActions;
