import ActionTypes from '../actions/actionRegistry';

export default (state = false, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_LOADING_STATE:
            return action.state
        default:
            return state;
    }
}