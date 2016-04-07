var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var BirthdayHelper = require( '../utils/helpers/birthday_helper' );

var EditProfileAttributeForm = React.createClass({
  render: function () {
    return (
      <form className="edit-attr-form" ref="form" onSubmit={ this._handleSubmit }>
        <span className='about-tag'>
          { this.props.type + ':' }
        </span>
        { this._generateForm() }
      </form>
    );
  },

  _generateForm: function () {
    switch ( this.props.type ) {
    case 'gender':
      return this._generateGenderForm();
    case 'birthday':
      return this._generateBirthdayForm();
    default:
      return this._generateTextForm();
    }
  },

  _generateBirthdayForm: function () {
    var defaultDate = this.props.data.split(' ');
    var month = defaultDate[0];
    var year = parseInt( defaultDate[2] );
    var day = parseInt( defaultDate[1].substring( 0, 2 ));

    return (
      <div>
        <select
          defaultValue={ month }
          className='form__input form__select select__month'
          name='profile[birthday_month]'>
          { BirthdayHelper.generateMonthOptions( month ) }
        </select>
        <select
          defaultValue={ day }
          className='form__input form__select select__day'
          name='profile[birthday_day]'>
          { BirthdayHelper.generateDayOptions( day ) }
        </select>
        <select
          defaultValue={ year }
          className='form__input form__select select__year'
          name='profile[birthday_year]'>
          { BirthdayHelper.generateYearOptions( year ) }
        </select>
        <input type="submit" value="Save" />
      </div>
    );
  },

  _generateGenderForm: function () {
    return (
      <div className='form__input'>
        <input type='radio' id="female" name='profile[gender]' defaultChecked={ this.props.data === 'Female' ? true : false } value='F' />
        <label htmlFor="female">  Female  </label>
        <input type='radio' id="male" name='profile[gender]' defaultChecked={ this.props.data === 'Female' ? false : true } value='M' />
        <label htmlFor="male">  Male  </label>
        <input type="submit" value="Save" />
      </div>
    );
  },

  _generateTextForm: function () {
    return (
      <div className='form__input'>
        <input type='text' name={ 'profile[' + this.props.type + ']' } defaultValue={ this.props.data } />
        <input type="submit" value="Save" />
      </div>
    );
  },

  _handleSubmit: function ( event ) {
    event.preventDefault();
    var formData = $( this.refs.form ).serialize();
    APIUtil.updateProfile( formData, this.props.onSave );
  }
});

module.exports = EditProfileAttributeForm;
