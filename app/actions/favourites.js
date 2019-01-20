import ActionTypes from './actionRegistry';

export const addToFavourites = waste => ({
    type: ActionTypes.ADD_TO_FAVOURITES,
    waste,
});

export const removeFavourite = id => ({
    type: ActionTypes.REMOVE_FAVOURITE,
    id,
});