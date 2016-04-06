var React = require( 'react' );

var LikeIndex = React.createClass({
  render: function () {
    return (
      <div className='like-index'>
        <a>Like</a>
        <span>14</span>
      </div>
    );
  }
});

module.exports = LikeIndex;
