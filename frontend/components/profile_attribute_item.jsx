var React = require( 'react' );
var EditProfileAttribute = require( './edit_profile_attribute' );
var SessionStore = require( '../stores/session_store' );

var ProfileAttributeItem = React.createClass({
  render: function () {
    return (
      <div className='about-section-attribute'>
        <span className='about-tag table-cell'>{ this.props.type }</span>
        <span className='about-data table-cell'>{ this.props.data }</span>
        { this._renderEdit() }
      </div>
    );
  },

  _renderEdit: function () {
    if ( this.props.userId === SessionStore.currentUserId() ) {
      return (
        <EditProfileAttribute className='table-cell' data={ this.props.data } type={ this.props.type } />
      );
    }
  },
});

module.exports = ProfileAttributeItem;
