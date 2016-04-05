var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );

var LogIn = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div>
        <div className='bar group'>

          <div className='sign-in container'>

            <h1>fauxbook</h1>

            <button onClick={ this._jack } className="small-blue-button guest-login">Log In As Jack</button>
            <button onClick={ this._diane } className="small-blue-button guest-login">Log In As Diane</button>

            <form ref='logInForm' onSubmit={ this._logIn }>

              <label>Email
                <input ref='email' type='text' name='user[email]' placeholder='me@example.com' />
              </label>

              <label>Password
                <input ref='password' type='password' name='user[password]' placeholder='********' />
              </label>

              <input type='submit' value='Log In' />

            </form>
          </div>
        </div>

        <div className='container group'>

          <div className='splash'>

            <h2>Connect with friends and the world around you on Fauxbook.</h2>
            <ul>
              <li><span><strong>See photos and updates</strong> linked straight from Tumblr.</span></li>
              <li><span><strong>Share what's new</strong> and engage in rational political discourse.</span></li>
              <li><span><strong>Find more</strong> ads featuring that thing you just saw on Amazon.</span></li>
            </ul>
          </div>

          <div className='sign-up'>

            <h1>Sign Up</h1>
            <h2>It's free because you are the product.</h2>

            <form ref="signUpForm" onSubmit={ this._createUser } >
              <input type='text' className='name-input' name='profile[first_name]' placeholder='First name' />

              <input type='text' className='name-input' name='profile[last_name]' placeholder='Last name' />

              <input type='text' className='sign-up-full-input' name='user[email]' placeholder='Email' />

              <input type='password' className='sign-up-full-input' name='user[password]' placeholder='New Password' />

              <label>Birthday
                <input type='date' className='sign-up-full-input' name='profile[birthday]' />
              </label>

              <input type='radio' id="female" name='profile[gender]' defaultChecked={ true } value='F' />
              <label htmlFor="female">  Female</label>
              <input type='radio' id="male" name='profile[gender]' value='M' />
              <label htmlFor="male">  Male</label>

              <input type='submit' value='Sign Up' />

            </form>
          </div>
        </div>
      </div>
    );
  },

  _jack: function () {
    this.refs.email.value = "jack@fauxbook.com";
    this.refs.password.value = "password";
    this._logIn();
  },

  _diane: function () {
    this.refs.email.value = "diane@fauxbook.com";
    this.refs.password.value = "password";
    this._logIn();
  },

  _logIn: function ( event ) {
    event && event.preventDefault();
    var formData = $( this.refs.logInForm ).serialize();
    APIUtil.logInUser( formData, this._redirectToApp );
  },

  _createUser: function ( event ) {
    event.preventDefault();
    var formData = $( this.refs.signUpForm ).serialize();
    APIUtil.createUser( formData, this._redirectToApp );
  },

  _redirectToApp: function () {
    this.context.router.push('/');
  }
});

module.exports = LogIn;
