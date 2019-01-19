import { takeEvery, all } from 'redux-saga/effects';
import ActionTypes from '../actions/actionRegistry';
import { startSearch } from "./search";

function* mySaga() {
    yield all([
        takeEvery(ActionTypes.START_SEARCH, startSearch),
    ])
}

export default mySaga;