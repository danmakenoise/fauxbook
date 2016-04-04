var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var ProfilePhotoUploadTool = require( './profile_photo_upload_tool' );
var SessionStore = require( '../stores/session_store' );

var ProfileHeaderPicture = React.createClass({
  render: function () {
    return (
      <div className='header-image-container'>
        { this._uploadForm() }
        { this._headerImage() }
      </div>
    );
  },

  _uploadForm: function () {
    if ( this.props.profile.user_id === SessionStore.currentUserId() ) {
      return <ProfilePhotoUploadTool callback={ this._onDrop } className='header-picture-upload' promptMessage='Update Cover Photo' />;
    }
  },

  _headerImage: function () {
    if ( this.props.profile && this.props.profile.cover_photo ) {
      return <img className='header-image' src={ this.props.profile.cover_photo } />;
    } else {
      return;
    }
  },

  _onDrop: function ( files ) {
    APIUtil.uploadCoverPicture( files );
  }
});

module.exports = ProfileHeaderPicture;
