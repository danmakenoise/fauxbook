var React = require( 'react' );
var ProfilePicture = require( '../profile_picture' );

var CommentItem = React.createClass({
  render: function () {
    return (
      <div className='comment-container'>
        <ProfilePicture
          targetUser={ this.props.comment.author_id }
          image={ this.props.comment.author.image }
        />
      <a
        href={ '/#/users/' + this.props.comment.author_id }
      >
        { this.props.comment.author.name }
      </a>
      <span>{ this.props.comment.body }</span>
      </div>
    );
  }
});

module.exports = CommentItem;
