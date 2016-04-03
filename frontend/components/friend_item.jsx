var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var FriendButton = require( './friend_button' );

var FriendItem = React.createClass({
  render: function () {
    return (
      <li className='friend-item group'>
          <ProfilePicture targetUser={ this.props.friend.id } image={ this.props.friend.photo } />
          <a href={ this._linkToProfile() }>
            { this.props.friend.name }<br />
            <span className="friend-location">{ this.props.friend.location }</span>
          </a>
          <FriendButton friend={ this.props.friend } />
      </li>
    );
  },

  _linkToProfile: function () {
    return '/#/users/' + this.props.friend.id;
  },

});

module.exports = FriendItem;
