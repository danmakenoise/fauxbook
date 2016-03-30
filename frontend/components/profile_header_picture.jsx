var React = require( 'react' );
var ProfilePhotoUploadTool = require( './profile_photo_upload_tool' );

var ProfileHeaderPicture = React.createClass({
  render: function () {
    return (
      <div className='header-image-container'>
        <ProfilePhotoUploadTool className='header-picture-upload' promptMessage='Update Cover Photo' />
        { this._headerImage() }
      </div>
    );
  },

  _headerImage: function () {
    if ( this.props.profile && this.props.profile.cover_picture ) {
      return <img className='header-image' src={ this.props.profile.cover_picture } />;
    } else {
      return;
    }
  }
});

module.exports = ProfileHeaderPicture;
