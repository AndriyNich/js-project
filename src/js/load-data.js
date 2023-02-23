const BASE_URL = 'https://api.themoviedb.org/3';

const SEARCH_TYPE = {
  SEARCH: 'search',
  COLLECTION: 'collection',
  FIND: 'find',
};

export default class DataControler {
  #listEventsforErr = [];
  #searchLine;
  #queryLine;
  #pageNumber;
  #collectionFilms;

  constructor() {}

  dataSearch(queryLine) {
    this.#queryLine = queryLine;
    this.#pageNumber = 1;
    this.#createSearchLine(SEARCH_TYPE.SEARCH);
  }

  dataSearchByPage(pageNumber) {
    this.#pageNumber = pageNumber;
    this.#createSearchLine(SEARCH_TYPE.SEARCH);
  }

  #sendQuery() {}

  #createSearchLine(key) {
    switch (key) {
      case SEARCH_TYPE.SEARCH:
        break;
      case SEARCH_TYPE.COLLECTION:
        break;
      case SEARCH_TYPE.FIND:
        break;
    }

    //  SEARCH: '/search/movie',
    //  COLLECTION: '/collection/',
    //  FIND: '/movie/',
  }
}
