var React = require( 'react' );
var FriendUtil = require( '../utils/friend_util' );
var FriendRequestUtil = require( '../utils/friend_request_util' );

var FriendButton = React.createClass({
  getInitialState: function () {
    return { disabled: false, message: '' };
  },

  componentWillReceiveProps: function ( newProps ) {
    if ( newProps.friend.id !== this.props.friend.id ) {
      this.setState({ disabled: false, message: '' });
    }
  },

  render: function () {
    return this._generateButton();
  },

  _generateButton: function () {
    if ( this.state.disabled ) {
      return <button className='friend-button'>{ this.state.message }</button>;
    } else if ( this.props.friend.is_friend ) {
      return <button className='friend-button' onClick={ this._removeFriend }>Remove Friend</button>;
    } else if ( this.props.friend.is_pending ) {
      return <button className='friend-button' onClick={ this._removeFriend }>Cancel Request</button>;
    } else if ( this.props.friend.is_requested ) {
      return <button className='friend-button' onClick={ this._approveFriend }>Approve Request</button>;
    } else if ( !this.props.friend.is_user ) {
      return <button className='friend-button' onClick={ this._addFriend }>Add Friend</button>;
    } else {
      return <div></div>;
    }
  },

  _addFriend: function () {
    if ( !this.state.disabled ) {
      this.setState( { disabled: true } );
      FriendUtil.addFriend( this.props.friend.id, this._friendAdded );
    }
  },

  _approveFriend: function () {
    if ( !this.state.disabled ) {
      this.setState( { disabled: true } );
      FriendRequestUtil.approveRequest( this.props.friend.id, this._friendApproved );
    }
  },

  _removeFriend: function () {
    if ( !this.state.disabled ) {
      this.setState( { disabled: true } );
      FriendUtil.removeFriend( this.props.friend.id, this._friendRemoved );
    }
  },

  _friendAdded: function () {
    this.setState( { message: 'Request Sent' } );
  },

  _friendApproved: function () {
    this.setState( { message: 'Request Approved' } );
  },

  _friendRemoved: function () {
    this.setState( { message: 'Friend Removed' } );
  }
});

module.exports = FriendButton;
