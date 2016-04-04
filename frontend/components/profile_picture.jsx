var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var ProfilePhotoUploadTool = require( './profile_photo_upload_tool' );
var SessionStore = require ( '../stores/session_store' );

var ProfilePicture = React.createClass({
  render: function () {
    if ( this.props.profile ) {
      return (
        <a className='profile-picture' href={ this._linkToProfile() } >
          <div className='profile-picture-container'>
            { this._uploadForm() }
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

  _uploadForm: function () {
    if ( this.props.profile.user_id === SessionStore.currentUserId() ) {
      return <ProfilePhotoUploadTool callback={ this._onDrop } className='profile-picture-upload' promptMessage='Update Profile Picture' />;
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
