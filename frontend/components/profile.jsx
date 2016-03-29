var React = require( 'react' );
var ProfileDisplay = require( './profile_display' );

var Profile = React.createClass({
  render: function () {
    return (
      <div className='profile'>
        <ProfileDisplay />
      </div>
    );
  }
});

module.exports = Profile;
