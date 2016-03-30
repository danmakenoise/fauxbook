var React = require( 'react' );
var ProfilePhotoUploadTool = require( './profile_photo_upload_tool' );

var ProfileHeaderPicture = React.createClass({
  render: function () {
    return (
      <div className='header-image-container'>
        <ProfilePhotoUploadTool className='header-picture-upload' promptMessage='Update Cover Photo' />
        <img className='header-image' src='cover.jpg' />
      </div>
    );
  }
});

module.exports = ProfileHeaderPicture;
