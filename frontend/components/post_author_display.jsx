var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var SessionStore = require( '../stores/session_store' );

var PostAuthorDisplay = React.createClass({
  render: function () {
    if ( this.props.profile ) {
      return (
        <ProfilePicture image={ this.props.profile.profile_picture }/>
      );
    } else {
      return <div></div>;
    }
  }
});

module.exports = PostAuthorDisplay;
