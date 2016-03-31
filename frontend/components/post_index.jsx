var React = require( 'react' );
var PostItem = require( './post_item' );

var PostIndex = React.createClass({
  render: function () {
    return (
      <div className='post-index'>
        <PostItem profile={ this.props.profile }/>
        <PostItem profile={ this.props.profile }/>
      </div>
    );
  }
});

module.exports = PostIndex;
