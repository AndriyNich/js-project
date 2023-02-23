// query films https://api.themoviedb.org/3/discover/movie?api_key=2ea7c46495834bb72f73e9f64cf920c5&language=uk-uk
// load image - https://image.tmdb.org/t/p/w300_and_h450_bestv2/fhMxcURSaKFIKoMib4JewuxfGOM.jpg
// look for ID= 245891 https://api.themoviedb.org/3/movie/245891?api_key=2ea7c46495834bb72f73e9f64cf920c5&language=uk-uk
// look for query string "wick"  - https://api.themoviedb.org/3/search/movie?api_key=2ea7c46495834bb72f73e9f64cf920c5&query='Wick'
// look for collection https://api.themoviedb.org/3/collection/{collection_id}?api_key=<<api_key>>&language=en-US

import Notification from './notification';
import DataControler from './load-data';

const refNotification = document.querySelector('.search-form__err');
if (refNotification) {
  const notification = new Notification(refNotification, 'visible-none');

  notification.clearMessage();

  notification.sendMessage('ERROR');
}

const dc = new DataControler();
