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
        <div className='bar group top-bar'>
          <div className='container nav-bar group'>
            <a href='/#/'><h1>fauxbook</h1></a>
            <Search />
            <ProfilePicture image={ SessionStore.userPicture() } targetUser={ SessionStore.currentUserId() } />
            <a href={'/#/users/' + SessionStore.currentUserId() } className='user-name'>{ SessionStore.currentUserName() }</a>
            <a href='/#/' className='user-name home-link'>Home</a>
            <NotificationTool />
            <FriendRequestTool />
            <button className='log-out-button' onClick={ this._logOut } >Log Out</button>
          </div>
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
