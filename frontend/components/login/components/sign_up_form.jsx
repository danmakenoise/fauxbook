var React = require( 'react' );

var APIUtil = require( '../../../utils/api_util' );
var BirthdayHelper = require( '../../../utils/helpers/birthday_helper' );

var SignUpForm = React.createClass({
  render: function () {
    return (
      <div className='sign-up'>
        <h1>Sign Up</h1>

        <h2>It's free because you are the product.</h2>

        <form ref="signUpForm" onSubmit={ this._createUser } >
          <input
            type='text'
            className='name-input form__input-text'
            name='profile[first_name]'
            placeholder='First name'>
          </input>

          <input
            type='text'
            className='name-input form__input-text'
            name='profile[last_name]'
            placeholder='Last name'>
          </input>

          <input
            type='text'
            className='sign-up-full-input form__input-text'
            name='user[email]'
            placeholder='Email'>
          </input>

          <input
            type='password'
            className='sign-up-full-input form__input-text'
            name='user[password]'
            placeholder='New Password'>
          </input>

          <label className="label__birthday">Birthday</label>
          <select
            className='sign-up-form__select select__month'
            name='profile[birthday_month]'>
            { BirthdayHelper.generateMonthOptions() }
          </select>
          <select
            className='sign-up-form__select select__day'
            name='profile[birthday_day]'>
            { BirthdayHelper.generateDayOptions() }
          </select>
          <select
            className='sign-up-form__select select__year'
            name='profile[birthday_year]'>
            { BirthdayHelper.generateYearOptions() }
          </select>

          <br />
          
          <input
            className='form__input-radio input-radio--first'
            id='female'
            type='radio'
            name='profile[gender]'
            defaultChecked={ true }
            value='F'>
          </input>
          <label htmlFor='female' className='input-radio__label'>
            Female
          </label>

          <input
            className='form__input-radio'
            id='male'
            type='radio'
            name='profile[gender]'
            value='M'>
          </input>
          <label htmlFor='male' className='input-radio__label'>
            Male
          </label>

          <input
            className='form__button--big-green'
            type='submit'
            value='Sign Up'>
          </input>

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
