var React = require( 'react' );
var FriendRequestUtil = require( '../../utils/friend_request_util' );
var FriendRequestStore = require( '../../stores/friend_request_store' );

var FriendRequestTool = React.createClass({
  getInitialState: function () {
    return { requests: [] };
  },

  componentDidMount: function () {
    FriendRequestUtil.fetchRequests();
    this.listener = FriendRequestStore.addListener( this._handleChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return (
      <button className={ this._determineClass() }>
        { this._hasRequests() ? this.state.requests.length : '' }
      </button>
    );
  },

  _determineClass: function () {
    if ( this._hasRequests() ) {
      return 'friend-request-button red-circle';
    } else {
      return 'friend-request-button';
    }
  },

  _handleChange: function () {
    this.setState( { requests: FriendRequestStore.all() });
  },

  _hasRequests: function () {
    return this.state.requests.length > 0;
  }
});

module.exports = FriendRequestTool;
