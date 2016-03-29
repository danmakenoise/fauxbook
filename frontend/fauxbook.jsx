var APIUtil = require( './utils/api_util' );
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var ReactRouter = require( 'react-router' );
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var App = require( './components/app' );
var Profile = require( './components/profile' );

var routes = (
  <Route path='/' component={ App }>
    <IndexRoute components={ Profile } />
  </Route>
);

$( function() {
  if ( $( '#app' )[0] ) {
    ReactDOM.render(
      <Router history={ hashHistory }>{ routes }</Router>,
      $( '#app' )[0]
    );
  } else {
    console.log( 'Not logged in' );
  }
});
