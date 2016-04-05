var React = require( 'react' );
var CommentUtil = require( '../../utils/comment_util' );

var CommentIndex = React.createClass({
  render: function () {
    return (
      <div className='comment-index'>
        <p>Comments for Post#{ this.props.postId }</p>
      </div>
    );
  }
});

module.exports = CommentIndex;
