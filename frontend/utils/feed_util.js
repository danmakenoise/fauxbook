var FeedActions = require( '../actions/feed_actions' );

var FeedUtil = {
  fetchFeed: function ( callback ) {
    $.ajax({
      url: 'api/feed',
      dataType: 'json',
      success: function ( posts ) {
        FeedActions.receiveFeedPosts( posts );
        callback && callback( posts.ids );
      }
    });
  },
};

module.exports = FeedUtil;
