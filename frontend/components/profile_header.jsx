var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var ProfileHeaderPicture = require( './profile_header_picture' );

var ProfileHeader = React.createClass({
  getInitialState: function () {
    return { activeTab: 'Posts' };
  },

  render: function () {
    return (
      <div className='profile-header'>
        <ProfileHeaderPicture profile={ this.props.profile } />
        <ProfilePicture profile={ this.props.profile } />
        { this._renderTabs() }
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
        <a className={ postClass } href='/#/' onClick={ this._toggleTabs }>Posts</a>
        <a className={ aboutClass } onClick={ this._toggleTabs } href='/#/about'>About</a>
      </div>
    );
  },

  _toggleTabs: function () {
    if ( this.state.activeTab === 'Posts' ) {
      this.setState( { activeTab: 'About' } );
    } else {
      this.setState( { activeTab: 'Posts' } );
    }
  }
});

module.exports = ProfileHeader;
