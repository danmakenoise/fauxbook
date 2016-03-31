var APIUtil = require( '../utils/api_util' );
var React = require( 'react' );
var Display = require( './display' );

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <h1 className='app-logo bar'>fauxbook
          <button onClick={ this._logOut } value='Log Out' />
        </h1>
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
