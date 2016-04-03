var React = require( 'react' );
var FriendUtil = require( '../utils/friend_util' );

var FriendButton = React.createClass({
  render: function () {
    return this._generateButton();
  },

  _generateButton: function () {
    if ( this.props.friend.is_friend ) {
      return <button onClick={ this._removeFriend }>Remove Friend</button>;
    } else if ( !this.props.friend.is_user ) {
      return <button onClick={ this._addFriend }>Add Friend</button>;
    } else {
      return <button>You</button>;
    }
  },

  _addFriend: function () {
    FriendUtil.addFriend( this.props.friend.id, this._toggleButton );
  },

  _removeFriend: function () {
    FriendUtil.removeFriend( this.props.friend.id, this._toggleButton );
  },

  _toggleButton: function () {
    this.props.friend.is_friend = !this.props.friend.is_friend;
    this.forceUpdate();
  }
});

module.exports = FriendButton;
