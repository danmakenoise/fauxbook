var React = require( 'react' );
var ProfileDisplay = require( './profile_display' );
var APIUtil = require( '../utils/api_util' );
var ProfileStore = require( '../stores/profile_store' );

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
    return (
      <div className='profile'>
        <ProfileDisplay profile={ this.state.profile }/>
      </div>
    );
  },

  _handleChange: function () {
    this.setState( { profile: ProfileStore.getProfile() } );
  }
});

module.exports = Profile;
