var React = require( 'react' );
var FriendRequestUtil = require( '../../../utils/friend_request_util' );
var FriendRequestStore = require( '../../../stores/friend_request_store' );
var FriendRequestIndex = require( './friend_request_index' );
var ModalConstants = require( '../../../constants/modal_constants' );
var ModalStore = require( '../../../stores/modal_store' );

var FriendRequestTool = React.createClass({
  getInitialState: function () {
    return { requests: [], expanded: false };
  },

  componentDidMount: function () {
    FriendRequestUtil.fetchRequests();
    this.modalListener = ModalStore.addListener( this._handleModals );
    this.listener = FriendRequestStore.addListener( this._handleChange );
    this.interval = window.setInterval( FriendRequestUtil.fetchRequests, 5000 );
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
    this.listener.remove();
    window.clearInterval( this.interval );
  },

  render: function () {
    return (
      <div onClick={ this._toggleExpand } className='info-bubble friend-request-tool-container'>
        <button
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
      return 'info-button friend-request-button red-circle';
    } else {
      return 'hidden';
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

  _handleModals: function () {
    if ( this.state.expanded ) {
      this.setState( { expanded: false } );
    }
  },

  _toggleExpand: function () {
    this.setState( { expanded: !this.state.expanded } );
  }
});

module.exports = FriendRequestTool;
