var React = require( 'react' );
var AboutProfileDisplay = require( './about_profile_display' );
var ProfilePicture = require( './profile_picture' );

var ProfileDisplay = React.createClass({
  render: function () {
    return (
      <div className='profile-display'>
        <ProfilePicture profile={ this.props.profile }/>
        <AboutProfileDisplay profile={ this.props.profile }/>
      </div>
    );
  }
});

module.exports = ProfileDisplay;
