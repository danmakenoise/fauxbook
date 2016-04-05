var React = require( 'react' );
var ProfilePicture = require( '../profile_picture' );
var SessionStore = require( '../../stores/session_store' );

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className='post-comment-form group'>
        <ProfilePicture
          targetUser={ SessionStore.currentUserId() }
          image={ SessionStore.userPicture() }
        />
      <input
        refs="input"
        onKeyDown={ this._handleKeyDown }
        type='text'
        placeholder='Write a comment.'
      />
      </div>
    );
  },

  _handleKeyDown: function ( event ) {
    var enterKey = 13;

    if ( event.keyCode === enterKey ) {
      // post comment
    }
  },
});

module.exports = CommentForm;
