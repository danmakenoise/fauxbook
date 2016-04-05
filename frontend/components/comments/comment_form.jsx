var React = require( 'react' );
var ProfilePicture = require( '../profile_picture' );
var SessionStore = require( '../../stores/session_store' );
var CommentUtil = require( '../../utils/comment_util' );

var CommentForm = React.createClass({
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
        defaultValue=''
      />
      </div>
    );
  },

  _handleKeyDown: function ( event ) {
    var enterKey = 13;

    if ( event.keyCode === enterKey ) {
      this._submitComment();
    }
  },

  _submitComment: function () {
    CommentUtil.createComment({
      post_id: this.props.postId,
      body: this.refs.input.value
    });
  },
});

module.exports = CommentForm;
