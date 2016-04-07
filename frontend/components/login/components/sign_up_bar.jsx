var React = require( 'react' );

var APIUtil = require( '../../../utils/api_util' );

var SignUpBar = React.createClass({
  render: function () {
    return (
      <div className='bar group'>
        <div className='sign-in container'>
          <h1>fauxbook</h1>

          { this._buttonForGuest( 'Log In As Jack',  this._jack  ) }
          { this._buttonForGuest( 'Log In As Diane', this._diane ) }

          <form ref='logInForm' onSubmit={ this._logIn }>
            <label>Email
              <input
                ref='email'
                type='text'
                name='user[email]'
                placeholder='me@example.com'>
              </input>
            </label>

            <label>Password
              <input
                ref='password'
                type='password'
                name='user[password]'
                placeholder='********'>
              </input>
            </label>

            <input type='submit' value='Log In' />

          </form>
        </div>
      </div>
    );
  },

  _buttonForGuest: function ( message, onClick ) {
    return (
      <button
        onClick={ onClick }
        className="small-blue-button guest-login">{ message }
      </button>
    );
  },

  _diane: function () {
    this.refs.email.value = "diane@fauxbook.com";
    this.refs.password.value = "password";
    this._logIn();
  },

  _jack: function () {
    this.refs.email.value = "jack@fauxbook.com";
    this.refs.password.value = "password";
    this._logIn();
  },

  _logIn: function ( event ) {
    event && event.preventDefault();
    var formData = $( this.refs.logInForm ).serialize();
    APIUtil.logInUser( formData, this.props.signInCallBack );
  },
});

module.exports = SignUpBar;
