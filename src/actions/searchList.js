import ActionTypes from './actionRegistry';

export const startSearch = item => ({
    type: ActionTypes.START_SEARCH,
    item,
});

export const updateSearchList = data => ({
    type: ActionTypes.UPDATE_SEARCH_LIST,
    data,
});