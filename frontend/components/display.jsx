var React = require( 'react' );

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
