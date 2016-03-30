var React = require( 'react' );
var Dropzone = require( 'react-dropzone' );

var ProfilePhotoUploadTool = React.createClass({
  render: function () {
    return (
      <Dropzone className={ this.props.className } multiple={ false } onDrop={ this.props.callback }>
        <span className='upload-prompt'>{ this.props.promptMessage }</span>
      </Dropzone>
    );
  },
});

module.exports = ProfilePhotoUploadTool;
