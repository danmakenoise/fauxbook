var CommentActions = require( '../actions/comment_actions' );

var CommentUtil = {
  createPostComment: function ( postId, commentBody, callback ) {
    $.ajax({
      url: '/api/posts/' + postId + '/comments',
      type: 'POST',
      data: { comment: { body: commentBody } },
      success: function ( comment ) {
        CommentActions.receiveComment( comment );
        callback && callback();
      }
    });
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
