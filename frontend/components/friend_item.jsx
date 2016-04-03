var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );

var FriendItem = React.createClass({
  render: function () {
    return (
      <li className='friend-item group'>
          <ProfilePicture targetUser={ this.props.friend.id } image={ this.props.friend.photo } />
          <a href={ this._linkToProfile() }>
            { this.props.friend.name }<br />
            <span className="friend-location">{ this.props.friend.location }</span>
          </a>
      </li>
    );
  },

  _linkToProfile: function () {
    return '/#/users/' + this.props.friend.id;
  },

});

module.exports = FriendItem;
