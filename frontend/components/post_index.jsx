var React = require( 'react' );
var PostItem = require( './post_item' );
var PostStore = require( '../stores/post_store' );
var APIUtil = require( '../utils/api_util' );
var PostForm = require( './post_form' );

var PostIndex = React.createClass({
  getInitialState: function () {
    return { posts: null };
  },

  componentDidMount: function () {
    APIUtil.fetchPosts( this.props.profile.id );
    this.listener = PostStore.addListener( this._handleChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
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

  _handleChange: function () {
    this.setState( { posts: PostStore.all() } );
  }
});

module.exports = PostIndex;
