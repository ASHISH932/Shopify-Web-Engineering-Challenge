import { call, all, put, fork } from 'redux-saga/effects';

// import { searchApi, getLatestTag } from "../api/github";
import { updateSearchList } from "../actions/searchList";

export function* startSearch(action = {}){
    const { item } = action;
    // const { response, error } = yield call(searchApi, item);
    const response = {hey:1}, error = false;
    const wasted = {
        body: "<ul><li>Place item in the <strong>Garbage Bin.</strong></li><li>Place item in the <strong>Garbage Bin.</strong></li></ul>",
        title: "Garbage (wrapping and typing)",
        favourite: false, 
    }
    const wasteList = [{... wasted, id: 0},{... wasted, id: 1},{... wasted, id: 2},{... wasted, id: 3}];    
    if (response) {
        // const result = yield all(response.items.map(r => call(latestTag, r)));
        yield put(updateSearchList(wasteList));
    } else {
        console.log(error);
    }
}

export function* latestTag(r) {
    const url = r['tags_url'];
    // const { version, err } = yield call(getLatestTag, url);
    const obj = {
        id: r.id,
        name: r['full_name'],
        language: r.language,
    };
    if (version && version.length>0) {
        return {
            ...obj,
            tag: version[0].name,
        }
    }
    return obj;
}