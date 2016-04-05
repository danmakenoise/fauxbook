var CommentActions = require( '../actions/comment_actions' );

var CommentUtil = {
  fetchAllComments: function ( postIds ) {
    $.ajax({
      url: 'api/comments',
      data: { ids: postIds },
      dataType: 'json',
      success: function ( comments ) {
        CommentActions.receiveComments( comments );
      }
    });
  }
};

module.exports = CommentUtil;
