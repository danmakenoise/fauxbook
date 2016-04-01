var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var PostConstants = require( '../constants/post_constants' );

var Store = require( 'flux/utils' ).Store;

var PostStore = new Store( AppDispatcher );

var _posts = [];
var _hasPosts = false;

PostStore.all = function () {
  return _posts.slice();
};

PostStore.destroy = function () {
  _posts = [];
  _hasPosts = false;
};

PostStore.hasPosts = function () {
  return _hasPosts;
};

PostStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case PostConstants.POSTS_RECEIVED:
    _receivePosts( payload.posts );
    break;
  case PostConstants.POST_RECEIVED:
    _receivePost( payload.post );
    break;
  default:
    // no-op
  }
};

var _receivePost = function ( post ) {
  _posts = [post].concat( _posts );
  _hasPosts = true;
  PostStore.__emitChange();
};

var _receivePosts = function ( posts ) {
  _posts = posts;
  _hasPosts = true;
  PostStore.__emitChange();
};

module.exports = PostStore;
