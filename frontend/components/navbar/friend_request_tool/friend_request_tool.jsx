var React = require( 'react' );
var FriendRequestUtil = require( '../../../utils/friend_request_util' );
var FriendRequestStore = require( '../../../stores/friend_request_store' );
var FriendRequestIndex = require( './friend_request_index' );

var FriendRequestTool = React.createClass({
  getInitialState: function () {
    return { requests: [], expanded: false };
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
      <div className='friend-request-tool-container'>
        <button
          onClick={ this._toggleExpand }
          className={ this._determineClass() }
        >
          { this._hasRequests() ? this.state.requests.length : 0 }
        </button>
        { this._renderRequestIndex() }
      </div>
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
  },

  _renderRequestIndex: function () {
    if ( this.state.expanded ) {
      return (
        <FriendRequestIndex requests={ this.state.requests }/>
      );
    }
  },

  _toggleExpand: function () {
    this.setState( { expanded: !this.state.expanded } );
  }
});

module.exports = FriendRequestTool;
