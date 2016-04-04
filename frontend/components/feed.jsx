var React = require( 'react' );
var PostIndex = require( './post_index' );
var PostForm = require( './post_form' );
var APIUtil = require( '../utils/api_util' );
var SessionStore = require( '../stores/session_store' );
var ProfileStore = require( '../stores/profile_store' );

var Feed = React.createClass({
  getInitialState: function () {
    return { profile: null };
  },

  componentDidMount: function () {
    APIUtil.fetchProfile( SessionStore.currentUserId() );
    this.listener = ProfileStore.addListener( this._handleChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    if ( this.state.profile ) {
      return (
        <div className="container group feed">
          <PostForm profile={ this.state.profile } />
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

module.exports = Feed;
