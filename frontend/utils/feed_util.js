var FeedActions = require( '../actions/feed_actions' );

var FeedUtil = {
  fetchFeed: function () {
    $.ajax({
      url: 'api/feed',
      dataType: 'json',
      success: function ( posts ) {
        FeedActions.receiveFeedPosts( posts );
      }
    });
  },
};

module.exports = FeedUtil;
