var React = require( 'react' );
var Display = require( './display' );

var App = React.createClass({
  render: function () {
    return (
      <div className='fauxbook'>
        <h1>fauxbook</h1>
        <Display>
          { this.props.children }
        </Display>
      </div>
    );
  }
});

module.exports = App;
