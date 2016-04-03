var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var SessionStore = require( '../stores/session_store' );

var PostAuthorDisplay = React.createClass({
  render: function () {
    if ( this.props.post ) {
      return (
        <div className='post-author-info group'>
          <ProfilePicture targetUser={ this.props.post.author_id } image={ this.props.post.author_picture }/>
          <a href={ this._linkToTarget() }><span className='post-author'>{ this.props.post.author_name }</span></a>
          <span className='post-date'>{ this.props.post.date }</span>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _linkToTarget: function () {
    return '/#/users/' + this.props.post.author_id;
  }
});

module.exports = PostAuthorDisplay;
