var React = require( 'react' );
var NotificationIndex = require( './notification_index' );
var NotificationUtil = require( '../../../utils/notification_util' );
var NotificationStore = require( '../../../stores/notification_store' );

var NotificationTool = React.createClass({
  getInitialState: function () {
    return { notifications: [], expanded: false };
  },

  componentDidMount: function () {
    NotificationUtil.fetchNotifications();
    this.listener = NotificationStore.addListener( this._handleChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return (
      <div className='notification-tool-container info-bubble'>
        <button
          onClick={ this._toggleExpand }
          className={ this._determineClass() }
        >
          { NotificationStore.count() }
        </button>
        { this._renderNotificationIndex() }
      </div>
    );
  },

  _determineClass: function () {
    if ( NotificationStore.count() > 0 ) {
      return 'notification-button info-button red-circle';
    } else {
      return 'notification-button info-button';
    }
  },

  _handleChange: function () {
    this.setState( { notifications: NotificationStore.all() });
  },

  _hasNotifications: function () {
    return this.state.notifications.length > 0;
  },

  _renderNotificationIndex: function () {
    if ( this.state.expanded ) {
      return (
        <NotificationIndex
          notifications={ this.state.notifications }
          onClick={ this._toggleExpand }
        />
      );
    }
  },

  _toggleExpand: function () {
    if ( this.state.expanded ) {
      NotificationUtil.markAllAsSeen();
    }
    this.setState( { expanded: !this.state.expanded } );
  }
});

module.exports = NotificationTool;
