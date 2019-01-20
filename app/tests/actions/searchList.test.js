import { startSearch, updateSearchList } from '../../actions/searchList';
import ActionType from '../../actions/actionRegistry';
import Waste from '../fixtures/waste';

test('should generate start search action object', () => {
  const action = startSearch("takeout");
  expect(action).toEqual({
    type: ActionType.START_SEARCH,
    item: "takeout",
  });
});

test('should generate empty string item start search action object if item not provided', () => {
  const action = startSearch();
  expect(action).toEqual({
    type: ActionType.START_SEARCH,
    item: "",
  });
});

test('should generate action object of update search list', () => {
  const action = updateSearchList(Object.assign([], Waste));
  expect(action).toEqual({
    type: ActionType.UPDATE_SEARCH_LIST,
    data: Waste,
  });
});

test('should generate empty action object of update search list action if wastes not provided', () => {
  const action = updateSearchList();
  expect(action).toEqual({
    type: ActionType.UPDATE_SEARCH_LIST,
    data: [],
  });
});