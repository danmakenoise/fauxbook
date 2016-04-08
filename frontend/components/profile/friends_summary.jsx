var React = require( 'react' );
var APIUtil = require( '../../utils/api_util' );
var SessionStore = require( '../../stores/session_store' );
var FriendStore = require( '../../stores/friend_store' );

var FriendsSummary = React.createClass({
  getInitialState: function () {
    return { friends: null };
  },

  componentDidMount: function () {
    var onOwnPage = SessionStore.currentUserId() === this.props.profile.user_id;
    APIUtil.fetchFriends( this.props.profile.user_id, onOwnPage );
    this.listener = FriendStore.addListener( this._handleChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function ( newProps ) {
    var onOwnPage = SessionStore.currentUserId === this.props.profile.user_id;
    if ( newProps.profile.user_id != this.props.profile.user_id ) {
      FriendStore.empty();
      APIUtil.fetchFriends( newProps.profile.user_id, onOwnPage );
    }
  },

  render: function () {
    return (
      <div className="friends-summary section section--white">
        <h1 className="section__header">
          <a href={ '/#/users/' + this.props.profile.user_id + '/friends' }>
            Friends
          </a>
          <span className="header__sub">{ this.state.count }</span>
        </h1>
        <ul className="friends-list--summary group">
          { this._renderFriends() }
        </ul>
      </div>
    );
  },

  _handleChange: function () {
    var allFriends = FriendStore.all();
    var subFriends = allFriends.slice(0, 9);

    this.setState( { count: allFriends.length, friends: subFriends } );
  },

  _renderFriends: function () {
    if ( this.state.friends ) {
      return this.state.friends.map( function ( friend ) {
        return (
          <li key={ friend.id } className='friend-item--square'>
            <a className='friend-item__link' href={ '/#/users/' + friend.id }>
            <div className='friend-item__container'>
              <img className='friend-item__photo' src={ friend.photo }></img>
              <span className='friend-item__name'>{ friend.name }</span>
            </div>
            </a>
          </li>
        );
      });
    }
  }
});

module.exports = FriendsSummary;
