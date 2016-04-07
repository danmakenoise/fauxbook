var CommentActions = require( '../actions/comment_actions' );
var CommentActions = require( '../actions/comment_actions' );
var ErrorHelper = require( './helpers/error_helper' );
var ErrorActions = require( '../actions/error_actions' );

var CommentUtil = {
  createSubComment: function ( commentId, commentBody, callback ) {
    $.ajax({
      url: '/api/comments/' + commentId + '/comments',
      type: 'POST',
      data: { comment: { body: commentBody } },
      success: function ( comment ) {
        _handleSuccess( comment, callback );
      }
    });
  },

  createPostComment: function ( postId, commentBody, callback ) {
    $.ajax({
      url: '/api/posts/' + postId + '/comments',
      type: 'POST',
      data: { comment: { body: commentBody } },
      success: function ( comment ) {
        _handleSuccess( comment, callback );
      }
    });
  },

  deleteComment: function ( commentId ) {
    $.ajax({
      url: '/api/comments/' + commentId,
      method: 'DELETE',
      success: function ( comment ) {
        CommentActions.deleteComment( comment );
      },
      error: function ( response ) {
        if ( response.status === 404 ) {
          ErrorActions.receiveErrors( ['Comment has already been deleted'] );
        } else {
          ErrorActions.apiError();
        }
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

var _handleSuccess = function ( comment, callback ) {
  ErrorHelper.checkForErrors( comment, function () {
    CommentActions.receiveComment( comment );
  });
  callback();
};

module.exports = CommentUtil;
