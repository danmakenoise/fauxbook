var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var SearchResultStore = require( '../stores/search_result_store' );
var SearchResultIndex = require( './search_result_index' );

var Search = React.createClass({
  getInitialState: function () {
    return { search: '', results: null };
  },

  componentDidMount: function () {
    this.listener = SearchResultStore.addListener( this._handleSearch );
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return (
      <div className='search-container'>
        <input ref='searchBar' type='text' value={ this.state.search } onChange={ this._handleChange } className='search-bar' placeholder='search fauxbook'/>
        { this._searchResults() }
      </div>
    );
  },

  _handleSearch: function () {
    this.setState( { results: SearchResultStore.all() } );
  },

  _handleChange: function () {
    this.setState( { search: this.refs.searchBar.value } );
    APIUtil.search( this.refs.searchBar.value );
  },

  _searchResults: function () {
    if ( this.state.results ) {
      return <SearchResultIndex results={ this.state.results } />;
    }
  }
});

module.exports = Search;
