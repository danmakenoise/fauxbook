var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );

var SearchResultItem = React.createClass({
  render: function () {
    return (
      <li className="search-result-item">
        { this._renderResults() }
      </li>
    );
  },

  _renderResults: function () {
    return (
      <ProfilePicture targetUser={ this.props.result.id } image={ this.props.result.photo }/>
    );
  }
});

module.exports = SearchResultItem;
