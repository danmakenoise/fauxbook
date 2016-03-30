var React = require( 'react' );

var ProfilePicture = React.createClass({
  render: function () {
    if ( this.props.profile ) {
      return (
        <div className='profile-picture'>
          <img src={ this.props.profile.profile_picture } />
        </div>
      );
    } else {
      return <div className='profile-picture'></div>;
    }
  }
});

module.exports = ProfilePicture;
