var React = require( 'react' );
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
    if ( this.state.profile ) {
      var profile = this.state.profile;
      var fullName = profile.first_name + ' ' + profile.last_name;
      var gender = profile.gender === 'M' ? 'Male' : 'Female';
      var birthday = profile.birthday;
      var location = profile.location || "The Internet";

      return (
        <div className='profile'>
          <h1>{ fullName }</h1>
          <ul>
            <li>{ gender }</li>
            <li>Born on { birthday }</li>
            <li>From { location }</li>
          </ul>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  },

  _handleChange: function () {
    this.setState( { profile: ProfileStore.getProfile() } );
  }
});

module.exports = Profile;
