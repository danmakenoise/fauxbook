var React = require( 'react' );
var PostIndex = require( '../post_index' );
var PostForm = require( '../post_form' );
var CommentUtil = require( '../../utils/comment_util' );
var CommentStore = require( '../../stores/comment_store' );
var SessionStore = require( '../../stores/session_store' );
var ProfileStore = require( '../../stores/profile_store' );
var PostUtil = require( '../../utils/post_util' );
var PostStore = require( '../../stores/post_store' );
var PostItem = require( '../post_item' );

var PostDisplay = React.createClass({
  getInitialState: function () {
    return { posts: null, comments: null };
  },

  componentDidMount: function () {
    PostUtil.fetchPost( this.props.params.id );
    CommentUtil.fetchComments( this.props.params.id );
    this.postListener = PostStore.addListener( this._handlePostChange );
  },

  componentWillUnmount: function () {
    this.postListener.remove();
    PostStore.destroy();
    CommentStore.destroy();
  },

  componentWillReceiveProps: function ( newProps ) {
    PostStore.destroy();
    CommentStore.destroy();
    this.setState({ posts: null, comments: null });
    PostUtil.fetchPost( newProps.params.id );
    CommentUtil.fetchComments( newProps.params.id );
  },

  render: function () {
    if ( this.state.posts ) {
      return (
        <div className="container group feed">
          { this.state.posts.map( function ( post ) {
            return <PostItem key={ post.id } post={ post } />;
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _handlePostChange: function () {
    this.setState( { posts: PostStore.all() } );
  }
});

module.exports = PostDisplay;
