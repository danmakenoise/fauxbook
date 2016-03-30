var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );

var ProfileHeader = React.createClass({
  render: function () {
    return (
      <div className='profile-header'>
        <div className='header-image-container'>
          <img className='header-image' src='cover.jpg' />
        </div>
        <ProfilePicture profile={ this.props.profile } />
      </div>
    );
  }
});

module.exports = ProfileHeader;
