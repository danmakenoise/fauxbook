var React = require( 'react' );
var CommentUtil = require( '../../utils/comment_util' );
var CommentItem = require( './comment_item' );
var CommentForm = require( './comment_form' );

var CommentIndex = React.createClass({
  render: function () {
    return (
      <div className='comment-index group'>
        { this._renderComments() }
      </div>
    );
  },

  _renderComments: function () {
    return this.props.comments.map( function ( comment ) {
      return <CommentItem key={ comment.id } comment={ comment } />;
    });
  },
});

module.exports = CommentIndex;
