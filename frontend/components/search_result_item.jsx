var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );

var SearchResultItem = React.createClass({
  render: function () {
    return (
      <li onClick={ this.props.callback } href={ this._linkToProfile() } className="search-result-item group">
        <ProfilePicture targetUser={ this.props.result.id } image={ this.props.result.photo }/>
        <span>{ this.props.result.name }</span>
      </li>
    );
  },

  _linkToProfile: function () {
    return '/#/users/' + this.props.result.id;
  },
});

module.exports = SearchResultItem;
