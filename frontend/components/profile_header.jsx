var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var ProfileHeaderPicture = require( './profile_header_picture' );
var SessionStore = require( '../stores/session_store' );

var ProfileHeader = React.createClass({
  getInitialState: function () {
    var activeTab = window.location.hash.match(/.+about/) ? 'About' : 'Posts';
    return { activeTab: activeTab };
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
    var postClass;
    var aboutClass;
    if ( this.state.activeTab === 'Posts' ) {
      postClass = 'profile-nav-tab profile-nav-active-tab';
      aboutClass = 'profile-nav-tab';
    } else {
      postClass = 'profile-nav-tab';
      aboutClass = 'profile-nav-tab profile-nav-active-tab';
    }

    return (
      <div className='profile-nav group'>
        <a className={ postClass } href={ this._generatePostLink() } onClick={ this._toggleTabs.bind( null, 'Posts' ) }>Posts</a>
        <a className={ aboutClass } onClick={ this._toggleTabs.bind( null, 'About' ) } href={ this._generateAboutLink() }>About</a>
      </div>
    );
  },

  _generatePostLink: function () {
    return '/#/users/' + this.props.profile.user_id;
  },

  _generateAboutLink: function () {
    return '/#/users/' + this.props.profile.user_id + '/about';
  },

  _toggleTabs: function ( activeTab ) {
    this.setState( { activeTab: activeTab } );
  }
});

module.exports = ProfileHeader;
