var React = require( 'react' );
var ProfileDisplay = require( './profile_display' );
var APIUtil = require( '../utils/api_util' );
var ProfileStore = require( '../stores/profile_store' );
var PostStore = require( '../stores/post_store' );
var ProfileHeader = require( './profile_header' );

var Profile = React.createClass({
  getInitialState: function () {
    return { profile: null };
  },

  componentDidMount: function () {
    this.listener = ProfileStore.addListener( this._handleChange );
    this._determineProfile( this.props );
  },

  componentWillUnmount: function () {
    PostStore.destroy();
    this.listener.remove();
  },

  componentWillReceiveProps: function ( newProps ) {
    this._determineProfile( newProps );
  },

  render: function () {
    if ( this.state.profile ) {
      return (
        <div className='profile'>
          <ProfileHeader profile={ this.state.profile }/>
          { this.props.children && React.cloneElement( this.props.children, {
            profile: this.state.profile
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _determineProfile: function ( props ) {
    var targetProfile;

    if ( props.params.hasOwnProperty( 'id' ) ) {
      targetProfile = props.params.id;
    }

    APIUtil.fetchProfile( targetProfile );
  },

  _handleChange: function () {
    this.setState( { profile: ProfileStore.getProfile() } );
  }
});

module.exports = Profile;
