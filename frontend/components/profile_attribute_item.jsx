var React = require( 'react' );
var EditProfileAttribute = require( './edit_profile_attribute' );

var ProfileAttributeItem = React.createClass({
  render: function () {
    return (
      <div className='about-section-attribute'>
        <span className='about-tag table-cell'>{ this.props.type }</span>
        <span className='about-data table-cell'>{ this.props.data }</span>
        <EditProfileAttribute className='table-cell' data={ this.props.data } type={ this.props.type } />
      </div>
    );
  }
});

module.exports = ProfileAttributeItem;
