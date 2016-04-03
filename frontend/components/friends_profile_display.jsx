var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var FriendStore = require( '../stores/friend_store' );

var FriendsProfileDisplay = React.createClass({
  getInitialState: function () {
    return { friends: null };
  },

  componentDidMount: function () {
    APIUtil.fetchFriends( this.props.profile.user_id );
    this.listener = FriendStore.addListener( this._handleChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function ( newProps ) {
    if ( newProps.profile.user_id != this.props.profile.user_id ) {
      FriendStore.empty();
      APIUtil.fetchFriends( newProps.profile.user_id );
    }
  },

  render: function () {
    return (
      <div className="friends-profile-display container group">
        <ul className="friends-list">
          { this._renderFriends() }
        </ul>
      </div>
    );
  },

  _handleChange: function () {
    this.setState( { friends: FriendStore.all() } );
  },

  _renderFriends: function () {
    if ( this.state.friends ) {
      return this.state.friends.map( function ( friend ) {
        return <li>{ friend.name }</li>;
      });
    }
  }
});

module.exports = FriendsProfileDisplay;
