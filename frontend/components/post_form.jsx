var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var ProfilePicture = require( './profile_picture' );
var Dropzone = require( 'react-dropzone' );
var SessionStore = require( '../stores/session_store' );

var PostForm = React.createClass({
  getInitialState: function () {
    return { rows: 4, body: '', photo: null, file: null };
  },

  render: function () {
    return (
      <form className='post-form group' >
        <div className='post-form-nav'>
          <span>Post</span>
          <Dropzone className='post-form-image-upload' onDrop={ this._updatePhoto } >Upload Photo</Dropzone>
        </div>
        { this._displayPhoto() }
        <ProfilePicture image={ SessionStore.userPicture() } />
        <textarea onKeyDown={ this._handleKey } ref='body' value={ this.state.body } className='post-form-input' onChange={ this._handleChange } placeholder="What's going on?" rows={ this.state.rows } cols='71' />
      </form>
    );
  },

  _displayPhoto: function () {
    if ( this.state.photo ) {
      return <img src={ this.state.photo } />;
    }
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
    if ( e.keyCode === enterKey &! e.shiftKey ) {
      APIUtil.createPost( this._generatePostData(), this._clearPost);
    }
  },

  _generatePostData: function () {
    var data = new FormData();

    if ( this.state.photo ) {
      data.append( 'post[photo]', this.state.file );
    }

    data.append( 'post[body]', this.state.body );
    data.append( 'post[profile_id]', this.props.profile.id );

    return data;
  },

  _updatePhoto: function ( files ) {
    var file = files[0];
    var reader = new FileReader();

    reader.addEventListener( 'load', function () {
      this.setState( { photo: reader.result, file: file } );
    }.bind( this ));

    reader.readAsDataURL( file );
  },

  _clearPost: function () {
    this.setState( { rows: 4, body: '', photo: null, file: null });
  }
});

module.exports = PostForm;
