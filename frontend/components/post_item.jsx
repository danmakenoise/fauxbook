var React = require( 'react' );
var PostAuthorDisplay = require( './post_author_display' );

var PostItem = React.createClass({
  render: function () {
    return (
      <div className='post group'>
        <PostAuthorDisplay profile={ this.props.profile }/>
        <p>Test Post Body</p>
      </div>
    );

  }
});

module.exports = PostItem;
