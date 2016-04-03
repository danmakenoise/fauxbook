var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );

var SearchResultItem = React.createClass({
  render: function () {
    return (
      <li className="search-result-item group">
        <ProfilePicture targetUser={ this.props.result.id } image={ this.props.result.photo }/>
        <a className="search-result-user-name" onClick={ this._redirectToPage } href={ this._linkToProfile() }>
          { this.props.result.name }<br />
        <span className="search-result-location">{ this.props.result.location }</span>
        </a>
      </li>
    );
  },

  _linkToProfile: function () {
    return '/#/users/' + this.props.result.id;
  },

  _redirectToPage: function ( event ) {
    this.props.callback( this.props.result.id );
  }
});

module.exports = SearchResultItem;
