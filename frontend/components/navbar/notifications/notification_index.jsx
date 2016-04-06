var React = require( 'react' );
var NotificationItem = require( './notification_item' );

var NotificationIndex = React.createClass({
  render: function () {
    return (
      <ul onClick={ this.props.onClick } className='notification-index friend-request-index'>
        { this._generateFriendRequests() }
      </ul>
    );
  },

  _generateFriendRequests: function () {
    if ( this.props.notifications.length > 0 ) {
      return this.props.notifications.map( function ( notification ) {
        return <NotificationItem key={ notification.id } notification={ notification } />;
      });
    } else {
      return <li>No Notifications Here!</li>;
    }
  }
});

module.exports = NotificationIndex;
