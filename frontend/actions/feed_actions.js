var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var FeedConstants = require( '../constants/feed_constants' );

var FeedActions = {
  receiveFeedPosts: function ( posts ) {
    AppDispatcher.dispatch({
      actionType: FeedConstants.FEED_POSTS_RECEIVED,
      posts: posts
    });
  },
};

module.exports = FeedActions;
