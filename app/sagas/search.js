import { call, put } from 'redux-saga/effects';

import { searchApi } from "../api/waste";
import { updateSearchList } from "../actions/searchList";
import { updateLoadingState } from '../actions/loadState';

export function* startSearch(action = {}){
    const { item } = action;
    yield put(updateLoadingState(true));
    const { response, error } = yield call(searchApi, item);
    if (response) {
        yield put(updateSearchList(response));
    } else {
        console.log(error);
    }
    yield put(updateLoadingState(false));
}
