import searchListReducer from '../../reducers/searchList';
import { updateSearchList } from '../../actions/searchList';
import wastes from '../fixtures/waste';

let state = searchListReducer(undefined, { type: '@@INIT' });
test('should set default state', () => {
  expect(state).toEqual([]);
});

test('should change state to waste list in state', () => {
  const action = updateSearchList(wastes);
  state = searchListReducer(state, action);
  expect(state).toEqual(wastes);
});

test('should change state to empty object in searchListReducer', () => {
  const action = updateSearchList([]);
  state = searchListReducer(state, action);
  expect(state).toEqual([]);
});