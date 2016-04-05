var APIUtil = require( '../utils/api_util' );
var React = require( 'react' );
var Display = require( './display' );
var Search = require( './search' );
var FriendRequestTool = require( './navbar/friend_request_tool/friend_request_tool' );

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div className='app'>
        <div className='app-logo bar group'>
          <a href='/#/'><h1 onClick={ this._goHome }>fauxbook</h1></a>
          <Search />
          <FriendRequestTool />
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
    this.context.router.push( '/login' );
  }
});

module.exports = App;
