var React = require( 'react' );

var AboutSummary = React.createClass({
  render: function () {
    return (
      <div className='about-summary section section--white'>
        <h1 className='section__header'>
          About { this.props.profile.first_name }
        </h1>
        <ul className='list'>
          <li className='list-item'>
            <span className='list-item__header'>
              Location:
            </span>
            <span className='list-item__body'>
              { this.props.profile.location || 'Not Entered' }
            </span>
          </li>
          <li className='list-item'>
            <span className='list-item__header'>
              Birthday:
            </span>
            <span className='list-item__body'>
              { this.props.profile.birthday }
            </span>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = AboutSummary;
