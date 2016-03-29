var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var ProfileStore = require( '../stores/profile_store' );

var AboutProfileDisplay = React.createClass({
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
      var location = profile.location ? profile.location : '';

      return (
        <div className='about-profile-display'>
          <header>
            <h1>About { fullName }</h1>
          </header>
          <div className='about-profile-information'>
            <div className='about-section-header'>
              <span>Basic Information</span>
            </div>
            <div className='about-section-contents'>
              <div className='about-section-attribute'>
                <span className='about-tag'>Gender</span>
                <span className='about-data'>{ gender }</span>
              </div>
              <div className='about-section-attribute'>
                <span className='about-tag'>Birthday</span>
                <span className='about-data'>{ birthday }</span>
              </div>
              <div className='about-section-attribute'>
                <span className='about-tag'>Location</span>
                <span className='about-data'>{ location }</span>
              </div>
            </div>
          </div>
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

module.exports = AboutProfileDisplay;
