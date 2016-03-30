var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var ProfileHeaderPicture = require( './profile_header_picture' );

var ProfileHeader = React.createClass({
  render: function () {
    return (
      <div className='profile-header'>
        <ProfileHeaderPicture profile={ this.props.profile } />
        <ProfilePicture profile={ this.props.profile } />
      </div>
    );
  }
});

module.exports = ProfileHeader;
