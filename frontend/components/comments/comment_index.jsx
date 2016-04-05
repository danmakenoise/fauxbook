var React = require( 'react' );
var CommentUtil = require( '../../utils/comment_util' );

var CommentIndex = React.createClass({
  render: function () {
    return (
      <div className='comment-index'>
        { this._renderComments() }
      </div>
    );
  },

  _renderComments: function () {
    return this.props.comments.map( function ( comment ) {
      return <p>{ comment.body }</p>;
    });
  },
});

module.exports = CommentIndex;
