import { addToFavourites, removeFavourite } from '../../actions/favourites';
import ActionType from '../../actions/actionRegistry';
import Waste from '../fixtures/waste';

test('should generate add to favourite action object', () => {
  const action = addToFavourites(Waste[0]);
  expect(action).toEqual({
    type: ActionType.ADD_TO_FAVOURITES,
    waste: Waste[0],
  });
});

test('should generate empty waste object in addToFavourite action if waste not provided', () => {
  const action = addToFavourites();
  expect(action).toEqual({
    type: ActionType.ADD_TO_FAVOURITES,
    waste: {},
  });
});

test('should generate action object of remove favourite', () => {
  const action = removeFavourite(1);
  expect(action).toEqual({
    type: ActionType.REMOVE_FAVOURITE,
    id: 1,
  });
});

test('should generate -1 id in removeFavourite if waste id not provided', () => {
  const action = removeFavourite();
  expect(action).toEqual({
    type: ActionType.REMOVE_FAVOURITE,
    id: -1,
  });
});