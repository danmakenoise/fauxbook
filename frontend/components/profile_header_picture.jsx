var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var ProfilePhotoUploadTool = require( './profile_photo_upload_tool' );

var ProfileHeaderPicture = React.createClass({
  render: function () {
    return (
      <div className='header-image-container'>
        <ProfilePhotoUploadTool callback={ this._onDrop } className='header-picture-upload' promptMessage='Update Cover Photo' />
        { this._headerImage() }
      </div>
    );
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
