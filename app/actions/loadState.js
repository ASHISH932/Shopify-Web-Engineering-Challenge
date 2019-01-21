import ActionTypes from './actionRegistry';

export const updateLoadingState = (state = false) => ({
    type: ActionTypes.UPDATE_LOADING_STATE,
    state,
});
