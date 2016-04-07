var React = require( 'react' );

var ProfileDisplay = require( './profile_display' );
var SideBar = require( './sidebar' );

var Display = React.createClass({
  render: function () {
    return (
      <div className='display container'>
        <SideBar />
        { this.props.children }
      </div>
    );
  }
});

module.exports = Display;
