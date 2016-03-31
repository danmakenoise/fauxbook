var APIUtil = require( '../utils/api_util' );
var React = require( 'react' );
var Display = require( './display' );

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <div className='app-logo bar group'>
          <h1>fauxbook</h1>
          <button className='log-out-button' onClick={ this._logOut } >Log Out</button>
        </div>
        <Display>
          { this.props.children }
        </Display>
      </div>
    );
  },

  _logOut: function () {
    APIUtil.logOut( this._redirectToLogin );
  },

  _redirectToLogin: function () {
    this.props.history.push( '/login' );
  }
});

module.exports = App;
