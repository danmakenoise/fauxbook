var React = require( 'react' );
var Display = require( './display' );

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <h1 className='app-logo bar'>fauxbook</h1>
        <Display>
          { this.props.children }
        </Display>
      </div>
    );
  }
});

module.exports = App;
