var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var Dropzone = require( 'react-dropzone' );

var ProfilePicture = React.createClass({
  render: function () {
    if ( this.props.profile ) {
      return (
        <div className='profile-picture'>
          <Dropzone multiple={ false } onDrop={ this._onDrop }>
            <img src={ this.props.profile.profile_picture } />
          </Dropzone>
        </div>
      );
    } else {
      return <div className='profile-picture'></div>;
    }
  },

  _onDrop: function ( files ) {
    APIUtil.uploadProfilePicture( files );
  }
});

module.exports = ProfilePicture;
