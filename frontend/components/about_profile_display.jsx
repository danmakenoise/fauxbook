var React = require( 'react' );
var ProfileAttributeItem = require( './profile_attribute_item' );
var EditProfileAttribute = require( './edit_profile_attribute' );

var AboutProfileDisplay = React.createClass({
  render: function () {
    if ( this.props.profile ) {
      var profile = this.props.profile;
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
              <ProfileAttributeItem data={ gender } type="gender" />
              <ProfileAttributeItem data={ birthday } type="birthday" />
              <ProfileAttributeItem data={ location } type="location" />
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  },
});

module.exports = AboutProfileDisplay;
