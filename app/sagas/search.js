import { call, put } from 'redux-saga/effects';

import { searchApi } from "../api/waste";
import { updateSearchList } from "../actions/searchList";

export function* startSearch(action = {}){
    const { item } = action;
    const { response, error } = yield call(searchApi, item);
    if (response) {
        yield put(updateSearchList(response));
    } else {
        console.log(error);
    }
}
