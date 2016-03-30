var React = require( 'react' );

var ProfileHeaderPicture = React.createClass({
  render: function () {
    return (
      <div className='header-image-container'>
        <img className='header-image' src='cover.jpg' />
      </div>
    );
  }
});

module.exports = ProfileHeaderPicture;
