var React = require( 'react' );

var APIUtil = require( '../../utils/api_util' );

var SignUpBar = require( './components/sign_up_bar' );
var SignUpForm = require( './components/sign_up_form' );
var Splash = require( './components/splash' );

var LogIn = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div>
        <SignUpBar signInCallback={ this._redirectToApp } />
        <div className='container group'>
          <Splash />
          <SignUpForm signUpCallback={ this._redirectToApp } />
        </div>
      </div>
    );
  },

  _redirectToApp: function () {
    this.context.router.push('/');
  }
});

module.exports = LogIn;
