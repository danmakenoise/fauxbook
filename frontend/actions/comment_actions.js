var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var CommentConstants = require( '../constants/comment_constants' );

var CommentActions = {
  receiveComment: function ( comment ) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECIEVED,
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
