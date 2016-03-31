var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var PostConstants = require( '../constants/post_constants' );

var Store = require( 'flux/utils' ).Store;

var PostStore = new Store( AppDispatcher );

var _posts = [];

PostStore.all = function () {
  return _posts.slice();
};

PostStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case PostConstants.POSTS_RECEIVED:
    _receivePosts( payload.posts );
    break;
  default:
    // no-op
  }
};

var _receivePosts = function ( posts ) {
  _posts = posts;
  PostStore.__emitChange();
};

module.exports = PostStore;
