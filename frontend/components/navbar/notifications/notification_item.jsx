var React = require( 'react' );
var ProfilePicture = require( '../../profile_picture' );

var NotificationItem = React.createClass({
  render: function () {
    var className = this.props.notification.seen ? '' : 'unseen-notification';

    return (
      <li className={ 'group ' + className }>
        <ProfilePicture
          image={ this.props.notification.photo }
          targetUser={ this.props.notification.author_id }
        />
        <a href={ this._linkToPost() }>{ this.props.notification.body }</a>
      </li>
    );
  },

  _linkToPost: function () {
    return '/#/posts/' + this.props.notification.post_id;
  }
});

module.exports = NotificationItem;
