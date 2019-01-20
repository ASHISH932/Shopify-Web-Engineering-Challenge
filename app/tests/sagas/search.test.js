import { startSearch } from '../../sagas/search';
import { call, put } from 'redux-saga/effects';
import { searchApi } from "../../api/waste";
import { updateSearchList } from "../../actions/searchList";

test('should properly run start search generator function as response is received', () => {
    const item = {
      response: 'hello'
    };
    const gen = startSearch({item});
    expect(gen.next().value).toEqual(call(searchApi, item));
    expect(gen.next(item).value).toEqual(put(updateSearchList(item.response)));
    expect(gen.next().done).toBe(true);
  });