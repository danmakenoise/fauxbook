var CommentActions = require( '../actions/comment_actions' );

var CommentUtil = {
  createComment: function ( commentData ) {
    // create comment
    console.log( commentData );
  },

  deleteComment: function ( commentId ) {
    // delete comment
    console.log( commentId );
  },

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
