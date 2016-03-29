var React = require( 'react' );
var AboutProfileDisplay = require( './about_profile_display' );

var ProfileDisplay = React.createClass({
  render: function () {
    return (
      <div className='profile-display'>
        <AboutProfileDisplay />
      </div>
    );
  }
});

module.exports = ProfileDisplay;
