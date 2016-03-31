var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var SessionStore = require( '../stores/session_store' );

var PostAuthorDisplay = React.createClass({
  render: function () {
    if ( this.props.profile ) {
      return (
        <div className='post-author-info group'>
          <ProfilePicture image={ this.props.profile.profile_picture }/>
          <span className='post-author'>{ this.props.profile.first_name + ' ' + this.props.profile.last_name }</span>
          <span className='post-date'>March 31</span>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
});

module.exports = PostAuthorDisplay;
