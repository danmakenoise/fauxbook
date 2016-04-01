var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var ProfilePhotoUploadTool = require( './profile_photo_upload_tool' );

var ProfilePicture = React.createClass({
  render: function () {
    if ( this.props.profile ) {
      return (
        <a className='profile-picture' href={ this._linkToProfile() } >
          <ProfilePhotoUploadTool callback={ this._onDrop } className='profile-picture-upload' promptMessage='Update Profile Picture' />
          <div className='profile-picture-container'>
            <img src={ this.props.profile.profile_picture } />
          </div>
        </a>
      );
    } else if ( this.props.image ) {
      return (
        <a className='profile-thumb-container' href={ this._linkToProfile() } >
          <img className='profile-thumb' src={ this.props.image } />
        </a>
      );
    } else {
      return <div className='profile-picture'></div>;
    }
  },

  _linkToProfile: function () {
    return '/#/users/' + this.props.targetUser;
  },

  _onDrop: function ( files ) {
    APIUtil.uploadProfilePicture( files );
  }
});

module.exports = ProfilePicture;
