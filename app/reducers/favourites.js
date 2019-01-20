import ActionTypes from '../actions/actionRegistry';

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_FAVOURITES:
            return Object.keys(action.waste).length > 0 ?
                [ ...state, { ...action.waste, favourite: true} ]
                :
                state;
        case ActionTypes.REMOVE_FAVOURITE:
            return action.id !== -1 ? state.filter(waste => {
                if(waste.id !== action.id) {
                    return waste;
                }
            })
            :
            state;
        default:
            return state;
    }
}