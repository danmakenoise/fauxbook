var React = require( 'react' );
var EditProfileAttributeForm = require( './edit_profile_attribute_form' );
var ProfileStore = require( '../stores/profile_store' );

var EditProfileAttribute = React.createClass({
  getInitialState: function () {
    return { editing: false };
  },

  render: function () {
    if ( this.state.editing ) {
      return <EditProfileAttributeForm onSave={ this._toggleEditing } data={ this.props.data } type={ this.props.type }/>;
    } else {
      return <button onClick={ this._toggleEditing }>Edit</button>;
    }
  },

  _handleClick: function ( event ) {
    event.preventDefault();
    this._toggleEditing();
  },

  _toggleEditing: function () {
    this.setState( { editing: !this.state.editing } );
  }
});

module.exports = EditProfileAttribute;
