var React = require( 'react' );
var AboutProfileDisplay = require( './about_profile_display' );
var ProfileHeader = require( './profile_header' );

var ProfileDisplay = React.createClass({
  render: function () {
    return (
      <div className='profile-display'>
        <ProfileHeader profile={ this.props.profile }/>
        <AboutProfileDisplay profile={ this.props.profile }/>
      </div>
    );
  }
});

module.exports = ProfileDisplay;
