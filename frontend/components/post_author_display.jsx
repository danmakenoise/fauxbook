var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var SessionStore = require( '../stores/session_store' );
var ProfileStore = require( '../stores/profile_store' );

var PostAuthorDisplay = React.createClass({
  render: function () {
    if ( this.props.post ) {
      return (
        <div className='post-author-info group'>
          <ProfilePicture targetUser={ this.props.post.author_id } image={ this.props.post.author_picture }/>
          <span className='post-date'>{ this.props.post.date }</span>
          <a href={ this._linkToTarget() }><span className='post-author'>{ this.props.post.author_name }</span></a>
          { this._linkTagToReceiver() }
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _linkTagToReceiver: function () {
    postedOnOwnProfile = this.props.post.author_id === this.props.post.receiver_id;
    lookingAtReceiversProfile = this.props.post.receiver_id === ProfileStore.userId;
    if ( this.props.post.author_id !== this.props.post.receiver_id ) {
      return (
        <a href={ this._linkToReceiver() }><span className='post-receiver'>{ this.props.post.receiver_name }</span></a>
      );
    }
  },

  _linkToTarget: function () {
    return '/#/users/' + this.props.post.author_id;
  },

  _linkToReceiver: function () {
    return '/#/users/' + this.props.post.receiver_id;
  }
});

module.exports = PostAuthorDisplay;
