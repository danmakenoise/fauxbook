var React = require( 'react' );

var ErrorStore = require( '../stores/error_store' );
var ModalStore = require( '../stores/modal_store' );

var ErrorBar = React.createClass({
  getInitialState: function () {
    return { errors: null };
  },

  componentDidMount: function () {
    this.errorsListener = ErrorStore.addListener( this._handleErrors );
    this.modalsListener = ModalStore.addListener( this._handleModals );
  },

  componentWillUnmount: function () {
    this.errorsListener.remove();
    this.modalsListener.remove();
  },

  render: function () {
    if ( this.state.errors ) {
      return this._renderErrorList();
    } else {
      return <div></div>;
    }
  },

  _errorMessages: function () {
    return [
      { author: 'Rene Descartes',
        quote: 'I am indeed amazed when I consider how weak my mind is and ' +
          'how prone to error.' },
      { author: 'Voltaire',
        quote: 'The progress of rivers to the ocean is not so rapid as that ' +
          'of man to error.' },
      { author: 'Orlando Aloysius Battista',
        quote: 'An error doesn\'t become a mistake until you refuse to ' +
          "correct it." },
      { author: 'William Hudson',
        quote: 'Game over, man. Game over!' },
      { author: 'Winston Churchill',
        quote: 'All men make mistakes, but only wise men learn from their ' +
          'mistakes.' },
      { author: 'Albert Einstein',
        quote: 'A person who never made a mistake never tried anything new.' }
    ];
  },

  _randomErrorMessage: function () {
    messages = this._errorMessages();
    randomIndex = Math.floor( Math.random() * messages.length );
    quote = messages[randomIndex];

    return (
      <div className='error-bar__error-quote'>
        <h1 className='error-quote__quote'>
          { '"' + quote.quote + '"' }
        </h1>
        <p className='error-quote__author'>
          { '-' + quote.author }
        </p>
      </div>
    );
  },

  _renderErrorList: function () {
    return (
      <div className='error-bar bar--shadowed'>
        { this._randomErrorMessage() }
        <ul className='error-bar__error-list'>
          { this._renderErrorItems() }
        </ul>
      </div>
    );
  },

  _renderErrorItems: function () {
    return this.state.errors.map( function ( error, index ) {
      return <li className='error-list__list-item' key={ index }>{ error }</li>;
    });
  },

  _handleErrors: function () {
    this.setState({ errors: ErrorStore.all() });
  },

  _handleModals: function () {
    this.setState({ errors: null });
  },
});

module.exports = ErrorBar;
