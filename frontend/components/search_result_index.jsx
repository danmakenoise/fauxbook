var React = require( 'react' );
var SearchResultItem = require( './search_result_item' );

var SearchResultIndex = React.createClass({
  render: function () {
    return (
      <ul className="search-results">
        { this._renderResults() }
      </ul>
    );
  },

  _renderResults: function () {
    return this.props.results.map( function ( result ) {
      return <SearchResultItem key={ result.id } result={ result } />;
    });
  }
});

module.exports = SearchResultIndex;
