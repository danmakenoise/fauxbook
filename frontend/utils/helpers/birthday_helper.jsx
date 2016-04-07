var React = require( 'react' );

var BirthdayHelper = {
  generateMonthOptions: function () {
    return this._generateAllOptions( this._months );
  },

  generateDayOptions: function () {
    return this._generateAllOptions( this._days() );
  },

  generateYearOptions: function () {
    return this._generateAllOptions( this._years() );
  },

  _generateAllOptions: function ( values ) {
    return values.map( function ( value ) {
      return <option key={ value } value={ value }>{ value }</option>;
    });
  },

  _days: function () {
    var output = [];

    for ( var i = 1; i <= 31; i++ ) {
      output.push( i );
    }

    return output;
  },

  _months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  _years: function () {
    var output = [];
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    var minYear = currentYear - 13;
    var maxYear = 1901;

    for ( var i = minYear; i >= maxYear; i-- ) {
      output.push( i );
    }

    return output;
  }
};

module.exports = BirthdayHelper;
