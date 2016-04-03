var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var ProfileHeaderPicture = require( './profile_header_picture' );
var SessionStore = require( '../stores/session_store' );

var ProfileHeader = React.createClass({
  getInitialState: function () {
    var activeTab = window.location.hash.match(/users\/\d+\/(\w+)/);

    if ( activeTab ) {
      return { activeTab: activeTab[1] };
    } else {
      return { activeTab: null };
    }
  },

  componentWillReceiveProps: function () {
    var activeTab = window.location.hash.match(/users\/\d+\/(\w+)/);

    if ( activeTab ) {
      this.setState( { activeTab: activeTab[1] });
    } else {
      this.setState( { activeTab: null });
    }
  },

  render: function () {
    return (
      <div className='profile-header'>
        <ProfileHeaderPicture profile={ this.props.profile } />
        <ProfilePicture targetUser={ this.props.profile.user_id } profile={ this.props.profile } />
        { this._renderTabs() }
        <h1>{ this.props.profile.first_name + ' ' + this.props.profile.last_name }</h1>
      </div>
    );
  },

  _renderTabs: function () {
    var inactiveClass = 'profile-nav-tab';
    var activeClass = 'profile-nav-tab profile-nav-active-tab';

    var postClass = this.state.activeTab === null ? activeClass : inactiveClass;
    var aboutClass = this.state.activeTab === 'about' ? activeClass : inactiveClass;
    var friendClass = this.state.activeTab === 'friends' ? activeClass : inactiveClass;

    return (
      <div className='profile-nav group'>
        <a className={ postClass } href={ this._generatePostLink() }>Posts</a>
        <a className={ aboutClass } href={ this._generateAboutLink() }>About</a>
        <a className={ friendClass } href={ this._generateFriendsLink() }>Friends</a>
      </div>
    );
  },

  _generatePostLink: function () {
    return '/#/users/' + this.props.profile.user_id;
  },

  _generateAboutLink: function () {
    return '/#/users/' + this.props.profile.user_id + '/about';
  },

  _generateFriendsLink: function () {
    return '/#/users/' + this.props.profile.user_id + '/friends';
  },

  _toggleTabs: function ( activeTab ) {
    this.setState( { activeTab: activeTab } );
  }
});

module.exports = ProfileHeader;
