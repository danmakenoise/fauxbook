var React = require( 'react' );
var ProfilePicture = require( './profile_picture' );
var SessionStore = require( '../stores/session_store' );

var AdBar = React.createClass({
  render: function () {
    return (
      <ul className='ad-bar-nav'>
        { this._generateAds() }
      </ul>
    );
  },

  _generateAds: function () {
    return this._randomAds().map( function ( ad ) {
      return (
        <li className='ad-bar__ad' key={ ad.name }>
          <a className='ad__link' href={ ad.url }>
            <div className={ 'ad__link__img img--' + ad.className } />
            <span className='ad__header'>{ ad.name }</span>
            <span className='ad__body'>{ ad.body }</span>
          </a>
        </li>
      );
    });
  },

  _randomAds: function () {
    return this._shuffle( this._ads ).slice(0, 3);
  },

  _shuffle: function ( array ) {
    var j, x, i;

    for (i = array.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }

    return array;
  },

  _ads: [
    { name: 'Ok9Cupid',
      className: 'ok9',
      url: 'http://www.ok9cupid.com',
      body: 'ok9cupid is a clone of the dating site OkCupid, and uses React.js on a Rails back-end. Its purpose is for users to search for adoptable dogs.'
    },
    { name: 'FoxNote',
      className: 'fox',
      url: 'http://www.foxnote.tech',
      body: 'FoxNote is a web application inspired by Evernote built using Ruby on Rails and React.js.'
    },
    { name: 'Formitable',
      className: 'table',
      url: 'http://formitable.herokuapp.com',
      body: 'Formitable is a web application designed as a Wufoo clone'
    },
    { name: 'AveEasy',
      className: 'ave',
      url: 'http://ave-easy.herokuapp.com/',
      body: 'AveEasy is a web application inspired by StreetEasy built using Ruby on Rails and React.js.'
    },
    { name: 'fakebook',
      className: 'fake',
      url: 'http://fakeboook.herokuapp.com',
      body: 'Another Facebook clone!',
    },
    { name: 'friendbook',
      className: 'friend',
      url: 'http://friendbookaa.herokuapp.com',
      body: 'Friendbook is a web application modeled on Facebook that uses Ruby on Rails for its backend and React.js for its frontend.',
    },
    { name: 'Ripple',
      className: 'ripple',
      url: 'http://ripplestarter.herokuapp.com/',
      body: 'Ripple is a web application inspired by KickStarter built using Ruby on Rails and React.js.',
    },
  ],
});

module.exports = AdBar;
