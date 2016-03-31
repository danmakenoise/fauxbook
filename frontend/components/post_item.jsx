var React = require( 'react' );
var PostAuthorDisplay = require( './post_author_display' );

var PostItem = React.createClass({
  render: function () {
    return (
      <div className='post group'>
        <PostAuthorDisplay post={ this.props.post }/>
        <p>{ this.props.post.body }</p>
      </div>
    );

  }
});

module.exports = PostItem;
