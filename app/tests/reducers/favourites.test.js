import favouritesReducer from '../../reducers/favourites';
import { addToFavourites, removeFavourite } from '../../actions/favourites';
import wastes from '../fixtures/waste';

let state = favouritesReducer(undefined, { type: '@@INIT' });
test('should set default state', () => {
  expect(state).toEqual([]);
});

test('should add waste to favourite', () => {
  const action = addToFavourites(wastes[0]);
  state = favouritesReducer(state, action);
  expect(state).toEqual([{ ...action.waste, favourite: true}]);
});

test('should return state back if empty object is passed in addTofavourite', () => {
  const action = addToFavourites();
  const newState = favouritesReducer(state, action);
  expect(state).toBe(newState);
});

test('should remove waste from favourite', () => {
    const action = removeFavourite(wastes[0].id);
    state = favouritesReducer(state, action);
    expect(state).toEqual([]);
})

test('should return state back when waste id is not provided in removeFavourite', () => {
    const action = removeFavourite();
    const newState = favouritesReducer(state, action);
    expect(state).toBe(newState);
})