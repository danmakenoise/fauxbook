var React = require( 'react' );
var CommentUtil = require( '../../utils/comment_util' );
var SubCommentItem = require( './sub_comment_item' );
var CommentForm = require( './comment_form' );
var CommentStore = require( '../../stores/comment_store' );

var SubCommentIndex = React.createClass({
  render: function () {
    return (
      <div className='sub-comment-index group'>
        { this._renderSubComments() }
      </div>
    );
  },

  _renderSubComments: function () {
    return this.props.comments.map( function ( comment ) {
      return <SubCommentItem key={ comment.id } comment={ comment } />;
    });
  },
});

module.exports = SubCommentIndex;
