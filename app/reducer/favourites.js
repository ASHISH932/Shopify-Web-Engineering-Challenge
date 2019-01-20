import ActionTypes from '../actions/actionRegistry';

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_FAVOURITES:
            return [ ...state, { ...action.waste, favourite: true} ];
        case ActionTypes.REMOVE_FAVOURITE:
            return state.filter(waste => {
                if(waste.id !== action.id) {
                    return waste;
                }
            });
        default:
            return state;
    }
}