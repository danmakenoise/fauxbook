var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var ProfilePicture = require( './profile_picture' );
var SessionStore = require( '../stores/session_store' );

var PostForm = React.createClass({
  getInitialState: function () {
    return { rows: 4, body: '' };
  },

  render: function () {
    return (
      <form className='post-form group' >
        <ProfilePicture image={ SessionStore.userPicture() } />
        <textarea onKeyDown={ this._handleKey } ref='body' value={ this.state.body } className='post-form-input' onChange={ this._handleChange } placeholder="What's going on?" rows={ this.state.rows } cols='71' />
      </form>
    );
  },

  _handleChange: function () {
    rowsNeeded = Math.floor( this.refs.body.value.length / 71 );
    rowsNeeded += this.refs.body.value.split('\n').length;
    rowsNeeded = rowsNeeded < 4 ? 4 : rowsNeeded + 1;

    this.setState({
      body: this.refs.body.value,
      rows: rowsNeeded
    });
  },

  _handleKey: function ( e ) {
    var enterKey = 13;
    if ( e.keyCode === enterKey ) {
      APIUtil.createPost({
        post: {
          body: this.state.body,
          profile_id: this.props.profile.id
        }
      }, this._clearPost);
    }
  },

  _clearPost: function () {
    this.setState( { rows: 4, body: '' });
  }
});

module.exports = PostForm;
