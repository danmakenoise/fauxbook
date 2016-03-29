var React = require( 'react' );

var Display = React.createClass({
  render: function () {
    return (
      <div className='display'>
        <h2>App Display</h2>
        { this.props.children }
      </div>
    );
  }
});

module.exports = Display;
