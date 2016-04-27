var React = require( 'react' );
var APIUtil = require( '../utils/api_util' );
var SearchResultStore = require( '../stores/search_result_store' );
var SearchResultIndex = require( './search_result_index' );
var ModalStore = require( '../stores/modal_store' );

var Search = React.createClass({
  getInitialState: function () {
    return { search: '', results: null };
  },

  componentDidMount: function () {
    this.modalListener = ModalStore.addListener( this._handleModals );
    this.listener = SearchResultStore.addListener( this._handleSearch );
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
    this.listener.remove();
  },

  render: function () {
    return (
      <div className='search-container'>
        <input
          ref='searchBar'
          name='search-bar'
          type='text' value={ this.state.search }
          onChange={ this._handleChange }
          className='search-bar'
          placeholder='search fauxbook'
        />
        { this._searchResults() }
      </div>
    );
  },

  _handleSearch: function () {
    this.setState( { results: SearchResultStore.all() } );
  },

  _handleChange: function () {
    this.setState( { search: this.refs.searchBar.value } );
    if ( this.refs.searchBar.value.length >= 2 ) {
      APIUtil.search( this.refs.searchBar.value );
    } else {
      this.setState( { results: null } );
    }
  },

  _handleModals: function () {
    this.setState( { results: null } );
  },

  _searchResults: function () {
    if ( this.state.results && this.state.results.length > 0 ) {
      return <SearchResultIndex callback={ this._searchComplete } results={ this.state.results } />;
    }
  },

  _searchComplete: function ( targetId ) {
    this.setState( { results: null, search: '' } );
  }
});

module.exports = Search;
