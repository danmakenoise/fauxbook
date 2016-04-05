var React = require( 'react' );
var PostAuthorDisplay = require( './post_author_display' );
var SessionStore = require( '../stores/session_store' );
var APIUtil = require( '../utils/api_util' );
var CommentIndex = require( './comments/comment_index' );
var CommentStore = require( '../stores/comment_store' );

var PostItem = React.createClass({
  getInitialState: function () {
    return { comments: null, deleting: false };
  },

  componentDidMount: function () {
    this.listener = CommentStore.addListener( this._handleCommentsChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return (
      <div className='post group'>
        <PostAuthorDisplay post={ this.props.post }/>
        { this._displayPhoto() }
        <p>{ this.props.post.body }</p>
        { this._postEditForm() }
        { this._renderComments() }
      </div>
    );
  },

  _handleCommentsChange: function () {
    var comments = CommentStore.postComments( this.props.post.id );
    if ( comments ) {
      this.setState( { comments: comments } );
    }
  },

  _renderComments: function () {
    if ( this.state.comments ) {
      return (
        <CommentIndex
          postId={ this.props.post.id }
          comments={ this.state.comments }
        />
      );
    }
  },

  _displayPhoto: function () {
    if ( this.props.post.photo ) {
      return (
        <div className='post-photo-container'>
          <img className='post-photo' src={ this.props.post.photo } />
        </div>
      );
    }
  },

  _postEditForm: function () {
    if ( SessionStore.currentUserId() === this.props.post.author_id ) {
      var buttonText = this.state.deleting ? 'Are You Sure?' : 'Delete';
      var activeClass = this.state.deleting ? '' : ' transparent';
      var buttonClass = 'post-delete-button small-blue-button' + activeClass;

      return (
        <div className='post-edit-form group'>
          <button className={ buttonClass } onClick={ this._deletePost }>
            { buttonText }
          </button>
        </div>
      );
    }
  },

  _deletePost: function () {
    if ( this.state.deleting ) {
      APIUtil.deletePost( this.props.post.id );
    } else {
      this.setState( { deleting: true } );
    }
  }
});

module.exports = PostItem;
