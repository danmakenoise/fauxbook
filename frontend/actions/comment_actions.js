var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var CommentConstants = require( '../constants/comment_constants' );

var CommentActions = {
  deleteComment: function ( comment ) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_DELETED,
      comment: comment
    });
  },

  receiveComment: function ( comment ) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  receiveComments: function ( comments ) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  }
};

module.exports = CommentActions;
