var React = require( 'react' );
var PostIndex = require( './post_index' );
var PostForm = require( './post_form' );
var APIUtil = require( '../utils/api_util' );
var SessionStore = require( '../stores/session_store' );
var ProfileStore = require( '../stores/profile_store' );
var FeedUtil = require( '../utils/feed_util' );
var PostStore = require( '../stores/post_store' );
var PostItem = require( './post_item' );

var Feed = React.createClass({
  getInitialState: function () {
    return { posts: null, profile: null };
  },

  componentDidMount: function () {
    APIUtil.fetchProfile( SessionStore.currentUserId() );
    FeedUtil.fetchFeed();
    this.profileListener = ProfileStore.addListener( this._handleProfileChange );
    this.postListener = PostStore.addListener( this._handlePostChange );
  },

  componentWillUnmount: function () {
    this.profileListener.remove();
    this.postListener.remove();
    PostStore.destroy();
  },

  render: function () {
    if ( this.state.profile && this.state.posts ) {
      return (
        <div className="container group feed">
          <PostForm profile={ this.state.profile } />
          { this.state.posts.map( function ( post ) {
            return <PostItem key={ post.id } post={ post } />;
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _handleProfileChange: function () {
    this.setState( { profile: ProfileStore.getProfile() } );
  },

  _handlePostChange: function () {
    this.setState( { posts: PostStore.all() } );
  }
});

module.exports = Feed;
