var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var CommentConstants = require( '../constants/comment_constants' );

var Store = require( 'flux/utils' ).Store;

var CommentStore = new Store( AppDispatcher );

var _comments = {};

CommentStore.postComments = function ( postId ) {
  return _comments.postComments[postId] || null;
};

CommentStore.subComments = function ( commentId ) {
  return _comments.subComments[commentId] || null;
};

CommentStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case CommentConstants.COMMENT_DELETED:
    _deleteComment( payload.comment );
    break;
  case CommentConstants.COMMENT_RECEIVED:
    _receiveComment( payload.comment );
    break;
  case CommentConstants.COMMENTS_RECEIVED:
    _receiveComments( payload.comments );
    break;
  default:
    // no-op
  }
};

var _deleteComment = function ( comment ) {
  var id = comment.commentable_id;
  var comments;
  var i;

  if ( comment.commentable_type === 'Post' ) {
    comments = _comments.postComments[id];
    for ( i = 0; i < comments.length; i++ ) {
      if ( comments[i].id === comment.id ) {
        comments.splice( i, 1 );
        console.log( _comments);
        CommentStore.__emitChange();
        return;
      }
    }
  } else {
    comments = _comments.subComments[id];
    for ( i = 0; i < comments.length; i++ ) {
      if ( comments[i].id === comment.id ) {
        comments.splice( i, 1 );
        console.log( _comments);
        CommentStore.__emitChange();
        return;
      }
    }
  }
};

var _receiveComment = function ( comment ) {
  var id = comment.commentable_id;
  if ( comment.commentable_type === 'Post' ) {
    _comments.postComments[id] = _comments.postComments[id] || [];
    _comments.postComments[id].push( comment );
  } else if ( comment.commentable_type === 'Comment' ) {
    _comments.subComments[id] = _comments.subComments[id] || [];
    _comments.subComments[id].push( comment );
  }
  CommentStore.__emitChange();
};

var _receiveComments = function ( comments ) {
  var allPostComments = {};
  var allSubComments = {};

  comments.forEach( function ( comment ) {
    var id = comment.commentable_id;

    if ( comment.commentable_type === 'Post' ) {
      allPostComments[id] = allPostComments[id] || [];
      allPostComments[id].push( comment );
    } else {
      allSubComments[id] = allSubComments[id] || [];
      allSubComments[id].push( comment );
    }
  });

  _comments = {
    postComments: allPostComments,
    subComments: allSubComments
  };

  CommentStore.__emitChange();
};

module.exports = CommentStore;
