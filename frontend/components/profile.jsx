var React = require( 'react' );
var ProfileDisplay = require( './profile_display' );
var APIUtil = require( '../utils/api_util' );
var ProfileStore = require( '../stores/profile_store' );
var ProfileHeader = require( './profile_header' );

var Profile = React.createClass({
  getInitialState: function () {
    return { profile: null };
  },

  componentDidMount: function () {
    this.listener = ProfileStore.addListener( this._handleChange );
    APIUtil.fetchProfile();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    if ( this.state.profile ) {
      return (
        <div className='profile'>
          <ProfileHeader profile={ this.state.profile }/>
          { React.cloneElement( this.props.children, {
            profile: this.state.profile
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _handleChange: function () {
    this.setState( { profile: ProfileStore.getProfile() } );
  }
});

module.exports = Profile;
