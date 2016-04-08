var React = require( 'react' );
var PostIndex = require( './post_index' );
var ProfileSummary = require( './profile_summary' );

var ProfileDisplay = React.createClass({
  render: function () {
    return (
      <div className='profile-display group'>
        <ProfileSummary profile={ this.props.profile }/>
        <PostIndex profile={ this.props.profile }/>
      </div>
    );
  },
});

module.exports = ProfileDisplay;
