import { call, all, put, fork } from 'redux-saga/effects';

import { searchApi } from "../api/waste";
import { updateSearchList } from "../actions/searchList";

export function* startSearch(action = {}){
    const { item } = action;
    console.log(item);
    const { response, error } = yield call(searchApi, item);
    console.log(error);
    console.log(response);
    // const response = {hey:1}, error = false;
    // const wasted = {
    //     body: "<ul><li>Place item in the <strong>Garbage Bin.</strong></li><li>Place item in the <strong>Garbage Bin.</strong></li></ul>",
    //     title: "Garbage (wrapping and typing)",
    //     favourite: false, 
    // }
    // const wasteList = [{... wasted, id: 0},{... wasted, id: 1},{... wasted, id: 2},{... wasted, id: 3}];    
    if (response) {
        // const result = yield all(response.items.map(r => call(latestTag, r)));
        yield put(updateSearchList(response));
    } else {
        console.log(error);
    }
}
