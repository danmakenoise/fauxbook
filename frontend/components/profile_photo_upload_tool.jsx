var React = require( 'react' );
var Dropzone = require( 'react-dropzone' );

var ProfilePhotoUploadTool = React.createClass({
  render: function () {
    return (
      <Dropzone className={ this.props.className } multiple={ false } onDrop={ this._onDrop }>
        <span className='upload-prompt'>{ this.props.promptMessage }</span>
      </Dropzone>
    );
  },

  _onDrop: function ( files ) {
    APIUtil.uploadProfilePicture( files );
  }
});

module.exports = ProfilePhotoUploadTool;
