var React = require( 'react' );

var NotificationTool = React.createClass({
  getInitialState: function () {
    return { notifications: [], expanded: false };
  },

  componentDidMount: function () {
    // NotificationUtil.fetchNotifications();
    // this.listener = NotificationStore.addListener( this._handleChange );
  },

  componentWillUnmount: function () {
    // this.listener.remove();
  },

  render: function () {
    return (
      <div className='notification-tool-container info-bubble'>
        <button
          onClick={ this._toggleExpand }
          className={ this._determineClass() }
        >
          { this._hasNotifications() ? this.state.notifications.length : 0 }
        </button>
        { this._renderNotificationIndex() }
      </div>
    );
  },

  _determineClass: function () {
    if ( this._hasNotifications() ) {
      return 'notification-button info-button red-circle';
    } else {
      return 'notification-button info-button';
    }
  },

  _handleChange: function () {
    // this.setState( { notifications: NotificationStore.all() });
  },

  _hasNotifications: function () {
    return this.state.notifications.length > 0;
  },

  _renderNotificationIndex: function () {
    if ( this.state.expanded ) {
      return (
        <div>Expanded</div>
      );
    }
  },
  // <NotificationIndex notifications={ this.state.notifications }/>

  _toggleExpand: function () {
    this.setState( { expanded: !this.state.expanded } );
  }
});

module.exports = NotificationTool;
