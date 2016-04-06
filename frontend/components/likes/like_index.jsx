var React = require( 'react' );
var LikeUtil = require( '../../utils/like_util' );

var LikeIndex = React.createClass({
  getInitialState: function () {
    return {
      likesCount: this.props.likesCount,
      liked: this.props.liked
    };
  },

  render: function () {
    return (
      <div className='like-index'>
        { this._generateLikeLink() }
        { this._generateLikeCount() }
      </div>
    );
  },

  _generateLikeCount: function () {
    var className = this.state.liked ? 'liked' : '';

    if ( this.state.likesCount > 0 ) {
      return (
        <span className={ className }>
          { this.state.likesCount }
        </span>
      );
    }
  },

  _generateLikeLink: function () {
    if ( this.state.liked ) {
      return (
        <a className='liked' onClick={ this._unLikeItem }>Unlike</a>
      );
    } else {
      return (
        <a onClick={ this._likeItem }>Like</a>
      );
    }
  },

  _likeItem: function () {
    LikeUtil.createLike( this.props.target, function () {
      this.setState({
        likesCount: this.state.likesCount + 1,
        liked: true
      });
    }.bind( this ));
  },

  _unLikeItem: function () {
    LikeUtil.destroyLike( this.props.target, function () {
      this.setState({
        likesCount: this.state.likesCount - 1,
        liked: false
      });
    }.bind( this ));
  },
});

module.exports = LikeIndex;
