var CommentActions = require( '../actions/comment_actions' );

var CommentUtil = {
  createSubComment: function ( commentId, commentBody, callback ) {
    $.ajax({
      url: '/api/comments/' + commentId + '/comments',
      type: 'POST',
      data: { comment: { body: commentBody } },
      success: function ( comment ) {
        CommentActions.receiveComment( comment );
        callback && callback();
      }
    });
  },

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
    $.ajax({
      url: '/api/comments/' + commentId,
      method: 'DELETE',
      success: function ( comment ) {
        CommentActions.deleteComment( comment );
      }
    });
  },

  fetchComments: function ( postId ) {
    this.fetchAllComments( [postId] );
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
