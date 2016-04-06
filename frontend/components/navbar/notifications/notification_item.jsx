var React = require( 'react' );
var ProfilePicture = require( '../../profile_picture' );
// var NotificationUtil = require( '../../../utils/notification_request_util' );

var NotificationItem = React.createClass({
  render: function () {
    return (
      <li className='group'>
        <ProfilePicture
          image={ this.props.notification.photo }
          targetUser={ this.props.notification.id }
        />
      <a href={ this._linkToUser() }>{ this.props.notification.name }</a>
        <br></br>
        <button onClick={ this._approve }>Approve</button>
        <button onClick={ this._deny }>Deny</button>
      </li>
    );
  },

  _approve: function () {
    FriendRequestUtil.approveRequest( this.props.notification.id );
  },

  _deny: function () {
    FriendRequestUtil.denyRequest( this.props.notification.id );
  },

  _linkToUser: function () {
    return '/#/users/' + this.props.notification.id;
  }
});

module.exports = NotificationItem;
