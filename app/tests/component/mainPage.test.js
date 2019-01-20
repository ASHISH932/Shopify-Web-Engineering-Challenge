import React from 'react';
import { shallow } from 'enzyme';
import { MainPage } from '../../component/mainPage';
import waste from '../fixtures/waste';

let wrapper;
let startSearchSpy, updateSearchListSpy, addToFavouriteSpy, removeFavouriteSpy;
beforeEach(() => {
  startSearchSpy = jest.fn();
  updateSearchListSpy = jest.fn();
  addToFavouriteSpy = jest.fn();
  removeFavouriteSpy = jest.fn();

  wrapper = shallow(<MainPage
    classes={{}}
    favourites={[{...waste[1], favourite:true}]}
    startSearch={startSearchSpy}
    updateSearchList={updateSearchListSpy}
    addToFavourites={addToFavouriteSpy}
    removeFavourite={removeFavouriteSpy}
    searchList={[waste[0], {...waste[1], favourite:true}, waste[2],waste[3]]}
    />);
});

test('should render MainPage component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle search click', () => {
  const value = "hey";
  wrapper.find('Jss(Search)').simulate('search', { value });
  expect(startSearchSpy).toHaveBeenCalledWith({ value });
});
test('should handle input cleared', () => {
    const value = "hey";
    wrapper.find('Jss(Search)').simulate('inputCleared', { value });
    expect(updateSearchListSpy).toHaveBeenCalledWith();
});
test('should handle favourite button clicked to add to favourite', () => {
    const value = "hey";
    wrapper.find('Jss(WasteElement)').at(0).simulate('click', { value });
    expect(addToFavouriteSpy).toHaveBeenCalledWith(waste[0]);
});

test('should handle favourite button clicked to remove favourite', () => {
    const value = "hey";
    wrapper.find('Jss(WasteElement)').at(1).simulate('click', { value });
    expect(removeFavouriteSpy).toHaveBeenCalledWith(waste[1].id);
});