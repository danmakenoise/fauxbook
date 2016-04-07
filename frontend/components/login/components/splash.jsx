var React = require( 'react' )

var Splash = React.createClass({
  render: function () {
    return (
      <div className='splash'>

        <h2>Connect with friends and the world around you on Fauxbook.</h2>
        <ul>
          <li><span><strong>See photos and updates</strong> linked straight from Tumblr.</span></li>
          <li><span><strong>Share what's new</strong> and engage in rational political discourse.</span></li>
          <li><span><strong>Find more</strong> ads featuring that thing you just saw on Amazon.</span></li>
        </ul>
      </div>
    );
  }
});

module.exports = Splash;
