import ActionType from '../actions/actionRegistry';

export default (state = [], action) => {
    switch (action.type) {
        case ActionType.UPDATE_SEARCH_LIST:
            return action.data;
        default:
            return state;
    }
}