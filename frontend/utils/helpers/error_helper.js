var ErrorActions = require( '../../actions/error_actions' );

var ErrorHelper = {
  checkForErrors: function( object, callback ) {
    if ( object.errors ) {
      ErrorActions.receiveErrors( object.errors );
    } else {
      callback( object );
    }
  }
};

module.exports = ErrorHelper;
