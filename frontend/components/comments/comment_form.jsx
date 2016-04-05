var React = require( 'react' );
var ProfilePicture = require( '../profile_picture' );
var SessionStore = require( '../../stores/session_store' );
var CommentUtil = require( '../../utils/comment_util' );

var CommentForm = React.createClass({
  getInitialState: function () {
    return { posting: false };
  },

  render: function () {
    return (
      <div className='post-comment-form group'>
        <ProfilePicture
          targetUser={ SessionStore.currentUserId() }
          image={ SessionStore.userPicture() }
        />
      <input
        ref="input"
        onKeyDown={ this._handleKeyDown }
        type='text'
        placeholder='Write a comment.'
      />
      </div>
    );
  },

  _confirmSubmit: function () {
    this.refs.input.value = '';
    this.setState( { posting: false } );
  },

  _handleKeyDown: function ( event ) {
    var enterKey = 13;

    if ( !this.state.posting && event.keyCode === enterKey ) {
      this.setState( { posting: true } );
      this._submitComment();
    }
  },

  _submitComment: function () {
    CommentUtil.createPostComment(
      this.props.postId,
      this.refs.input.value,
      this._confirmSubmit
    );
  },
});

module.exports = CommentForm;
