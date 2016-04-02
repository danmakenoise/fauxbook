var React = require( 'react' );
var SearchResultItem = require( './search_result_item' );

var SearchResultIndex = React.createClass({
  render: function () {
    return (
      <ul className="search-results group">
        { this._renderResults() }
      </ul>
    );
  },

  _renderResults: function () {
    return this.props.results.map( function ( result ) {
      return <SearchResultItem callback={ this.props.callback } key={ result.id } result={ result } />;
    }.bind( this ));
  }
});

module.exports = SearchResultIndex;
