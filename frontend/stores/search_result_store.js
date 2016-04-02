var AppDispatcher = require( '../dispatcher/app_dispatcher' );
var SearchConstants = require( '../constants/search_constants' );

var Store = require( 'flux/utils' ).Store;

var SearchResultStore = new Store( AppDispatcher );
var _results = [];

SearchResultStore.all = function () {
  return _results.slice();
};

SearchResultStore.__onDispatch = function ( payload ) {
  switch ( payload.actionType ) {
  case SearchConstants.RESULTS_RECEIVED:
    _receiveResults( payload.results );
    break;
  default:
    // no-op
  }
};

var _receiveResults = function ( results ) {
  _results = results;
  SearchResultStore.__emitChange();
};

module.exports = SearchResultStore;
