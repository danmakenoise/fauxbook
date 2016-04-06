var React = require( 'react' );
var ProfilePicture = require( '../profile_picture' );
var SessionStore = require( '../../stores/session_store' );
var CommentUtil = require( '../../utils/comment_util' );
var CommentStore = require( '../../stores/comment_store' );
var SubCommentForm = require( './sub_comment_form' );
var SubCommentIndex = require( './sub_comment_index' );

var CommentItem = React.createClass({
  getInitialState: function () {
    return {
      deleting: false,
      subComments: CommentStore.subComments( this.props.comment.id )
    };
  },

  componentDidMount: function () {
    this.listener = CommentStore.addListener( this._handleCommentsChange );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return (
      <div className='comment-container group'>
        <div className='comment-main-section group'>
          <ProfilePicture
            targetUser={ this.props.comment.author_id }
            image={ this.props.comment.author.image }
          />
          <a
            className='comment-author'
            href={ '/#/users/' + this.props.comment.author_id }
          >
            { this.props.comment.author.name }
          </a>
          <span className='comment-body'>{ this.props.comment.body }</span>
          <span className='comment-date'>{ this.props.comment.date }</span>
          { this._commentDeleteButton() }
        </div>
        <div className='group'>
          <SubCommentForm comment={ this.props.comment } />
          { this._renderSubComments() }
        </div>
      </div>
    );
  },

  _commentDeleteButton: function () {
    if ( SessionStore.currentUserId() === this.props.comment.author_id ) {
      var buttonText = this.state.deleting ? 'Are You Sure?' : 'Delete';
      var activeClass = this.state.deleting ? '' : ' transparent';
      var buttonClass = 'comment-delete-button' + activeClass;

      return (
        <button className={ buttonClass } onClick={ this._deleteComment }>
          { buttonText }
        </button>
      );
    }
  },

  _deleteComment: function () {
    if ( this.state.deleting ) {
      CommentUtil.deleteComment( this.props.comment.id );
    } else {
      this.setState( { deleting: true } );
    }
  },

  _handleCommentsChange: function () {
    this.setState({
      subComments: CommentStore.subComments( this.props.comment.id )
    });
  },

  _renderSubComments: function () {
    if ( this.state.subComments ) {
      return <SubCommentIndex comments={ this.state.subComments } />;
    }
  }
});

module.exports = CommentItem;
