var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var SessionStore = require( '../stores/session_store' );

var SideBar = React.createClass({
  render: function () {
    return (
      <ul className='side-bar-nav'>
        <li className='list-item'>
          <a className='list-item__link'
            href={ '/#/users/' + SessionStore.currentUserId() }
          >
            <img
              className='link__icon'
              src={ SessionStore.userPicture() }>
            </img>
            <span className='link__text'>
              { SessionStore.currentUserName() }
            </span>
          </a>
        </li>
        <li className='list-item'>
          <a
            className='list-item__link'
            href={ '/#/users/' + SessionStore.currentUserId() + '/about' }
          >
            <img
              className='link__icon'
              src={ SessionStore.userPicture() }>
            </img>
            <span className='link__text'>
              Edit Profile
            </span>
          </a>
        </li>
        <li className='list-item'>
          <div
            className='link__icon link__icon--newsfeed'>
          </div>
          <span className='link__text link__text--active'>Newsfeed</span>
        </li>
      </ul>
    );
  }
});

module.exports = SideBar;
