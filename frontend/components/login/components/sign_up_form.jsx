var React = require( 'react' );

var APIUtil = require( '../../../utils/api_util' );

var SignUpForm = React.createClass({
  render: function () {
    return (
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
    );
  },

  _createUser: function ( event ) {
    event.preventDefault();
    var formData = $( this.refs.signUpForm ).serialize();
    APIUtil.createUser( formData, this.props.signUpCallback );
  },
});

module.exports = SignUpForm;
