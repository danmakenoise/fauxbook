var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );

var EditProfileAttributeForm = React.createClass({
  render: function () {
    return (
      <form className="edit-attr-form" ref="form" onSubmit={ this._handleSubmit }>
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
    return (
      <div>
        <input type='date' className='edit-date-input' name='profile[birthday]' />
        <input type="submit" value="Save" />
      </div>
    );
  },

  _generateGenderForm: function () {
    return (
      <div>
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
      <div>
        <input type='text' name={ 'profile[' + this.props.type + ']' } placeholder={ this.props.type } />
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
