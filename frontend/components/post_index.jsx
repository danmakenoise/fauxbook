var React = require( 'react' );
var PostItem = require( './post_item' );
var PostStore = require( '../stores/post_store' );
var APIUtil = require( '../utils/api_util' );
var PostForm = require( './post_form' );
var CommentUtil = require( '../utils/comment_util' );

var PostIndex = React.createClass({
  getInitialState: function () {
    if ( PostStore.hasPosts() ) {
      return { posts: PostStore.all() };
    } else {
      return { posts: null };
    }
  },

  componentDidMount: function () {
    if ( !this.state.posts ) {
      APIUtil.fetchPosts( this.props.profile.id, this._fetchAllComments );
    }

    this.listener = PostStore.addListener( this._handleChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function ( newProps ) {
    PostStore.destroy();
    APIUtil.fetchPosts( newProps.profile.id, this._fetchAllComments );
  },

  render: function () {
    if ( this.state.posts ) {
      return (
        <div className='post-index'>
          <PostForm profile={ this.props.profile } />
          { this.state.posts.map( function ( post ) {
            return <PostItem key={ post.id } post={ post } />;
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _fetchAllComments: function ( postIds ) {
    CommentUtil.fetchAllComments( postIds );
  },

  _handleChange: function () {
    this.setState( { posts: PostStore.all() } );
  }
});

module.exports = PostIndex;
