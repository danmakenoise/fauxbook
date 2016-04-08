var React = require( 'react' );
var AboutSummary = require( './profile/about_summary' );
var FriendsSummary = require( './profile/friends_summary' );

var ProfileSummary = React.createClass({
  render: function () {
    return (
      <div className='profile-summary group'>
        <AboutSummary profile={ this.props.profile }/>
        <FriendsSummary profile={ this.props.profile }/>
      </div>
    );
  }
});

module.exports = ProfileSummary;
