var React = require( 'react' );
var ProfilePicture = require( '../profile_picture' );
var SessionStore = require( '../../stores/session_store' );
var CommentUtil = require( '../../utils/comment_util' );
var LikeIndex = require( '../likes/like_index' );

var SubCommentForm = React.createClass({
  getInitialState: function () {
    return { posting: false, replying: false };
  },

  render: function () {
    if ( this.state.replying ) {
      return (
        <div className='post-sub-comment-form group'>
          <div className='post-sub-comment-reply'>
            <LikeIndex
              target={ '/comments/' + this.props.comment.id }
              likesCount={ this.props.comment.likes }
              liked={ this.props.comment.liked }
            />
            <button
              className='reply-button'
              onClick={ this._expand }
              >
              Reply
            </button>
          </div>
          <ProfilePicture
            targetUser={ SessionStore.currentUserId() }
            image={ SessionStore.userPicture() }
          />
          <input
            ref="input"
            onKeyDown={ this._handleKeyDown }
            type='text'
            placeholder='Write a reply.'
          />
        </div>
      );
    } else {
      return (
        <div className='post-sub-comment-reply'>
          <LikeIndex
            target={ '/comments/' + this.props.comment.id }
            likesCount={ this.props.comment.likes }
            liked={ this.props.comment.liked }
          />
          <button
            className='reply-button'
            onClick={ this._expand }
          >
            Reply
          </button>
        </div>
      );
    }
  },

  _confirmSubmit: function () {
    this.refs.input.value = '';
    this.setState( { posting: false, replying: false } );
  },

  _expand: function () {
    this.setState( { replying: true } );
  },

  _handleKeyDown: function ( event ) {
    var enterKey = 13;

    if ( !this.state.posting && event.keyCode === enterKey ) {
      this.setState( { posting: true } );
      this._submitComment();
    }
  },

  _submitComment: function () {
    CommentUtil.createSubComment(
      this.props.comment.id,
      this.refs.input.value,
      this._confirmSubmit
    );
  },
});

module.exports = SubCommentForm;
