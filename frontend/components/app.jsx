var React = require( 'react' );

var APIUtil = require( '../utils/api_util' );

var ModalActions = require( '../actions/modal_actions' );

var Display = require( './display' );
var ErrorBar = require( './error_bar' );
var FriendRequestTool = require( './navbar/friend_request_tool/friend_request_tool' );
var NotificationTool = require( './navbar/notifications/notification_tool' );
var ProfilePicture = require( './profile_picture' );
var Search = require( './search' );
var SessionStore = require( '../stores/session_store' );

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div className='app' onClick={ this._closeModals }>
        <div className='top-bar app-logo bar group'>
          <a href='/#/'><h1 onClick={ this._goHome }>fauxbook</h1></a>
          <Search />
          <ProfilePicture image={ SessionStore.userPicture() } targetUser={ SessionStore.currentUserId() } />
          <span className='user-name'>{ SessionStore.currentUserName() }</span>
          <NotificationTool />
          <FriendRequestTool />
          <button className='log-out-button' onClick={ this._logOut } >Log Out</button>
        </div>
        <ErrorBar />
        <Display>
          { this.props.children }
        </Display>
      </div>
    );
  },

  _closeModals: function () {
    ModalActions.closeModals();
  },

  _logOut: function () {
    APIUtil.logOut( this._redirectToLogin );
  },

  _redirectToLogin: function () {
    this.context.router.push( '/login' );
  }
});

module.exports = App;
