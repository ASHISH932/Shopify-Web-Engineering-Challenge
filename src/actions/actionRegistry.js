const favouritesActionTypes = {
  ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES',
  REMOVE_FAVOURITE: 'REMOVE_FAVOURITE',
};

const searchListActionTypes = {
  START_SEARCH: 'START_SEARCH',
  UPDATE_SEARCH_LIST: 'UPDATE_SEARCH_LIST',
};

export default { ...favouritesActionTypes, ...searchListActionTypes }