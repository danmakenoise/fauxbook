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
      <button className='friend-request-button'>
        { this.state.requests.length ? this.state.requests.length : '' }
      </button>
    );
  },

  _handleChange: function () {
    this.setState( { requests: FriendRequestStore.all() });
  }

});

module.exports = FriendRequestTool;
