var React = require( 'react' );
var FriendRequestItem = require( './friend_request_item' );

var FriendRequestIndex = React.createClass({
  render: function () {
    return (
      <ul className='friend-request-index'>
        { this._generateFriendRequests() }
      </ul>
    );
  },

  _generateFriendRequests: function () {
    if ( this.props.requests.length > 0 ) {
      return this.props.requests.map( function ( request ) {
        return <FriendRequestItem key={ request.id } request={ request } />;
      });
    } else {
      return <li>No Friend Requests</li>;
    }
  }
});

module.exports = FriendRequestIndex;
