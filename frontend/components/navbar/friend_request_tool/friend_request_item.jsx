var React = require( 'react' );
var ProfilePicture = require( '../../profile_picture' );
var FriendRequestUtil = require( '../../../utils/friend_request_util' );

var FriendRequestItem = React.createClass({
  render: function () {
    return (
      <li className='group'>
        <ProfilePicture
          image={ this.props.request.photo }
          targetUser={ this.props.request.id }
        />
        <a href={ this._linkToUser() }>{ this.props.request.name }</a>
        <br></br>
        <button onClick={ this._approve }>Approve</button>
        <button onClick={ this._deny }>Deny</button>
      </li>
    );
  },

  _approve: function () {
    FriendRequestUtil.approveRequest( this.props.request.id );
  },

  _deny: function () {
    FriendRequestUtil.denyRequest( this.props.request.id );
  },

  _linkToUser: function () {
    return '/#/users/' + this.props.request.id;
  }
});

module.exports = FriendRequestItem;
