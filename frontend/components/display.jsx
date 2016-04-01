var React = require( 'react' );
var ProfileDisplay = require( './profile_display' );

var Display = React.createClass({
  render: function () {
    return (
      <div className='display container'>
        { this.props.children }
      </div>
    );
  }
});

module.exports = Display;
