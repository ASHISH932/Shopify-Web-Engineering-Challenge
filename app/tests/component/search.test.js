import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../../component/search';
import waste from '../fixtures/waste';

let wrapper;
let onInputClearedSpy, onSearchSpy;
beforeEach(() => {
  onInputClearedSpy = jest.fn();
  onSearchSpy = jest.fn();

  wrapper = shallow(<Search
    classes={{}}
    onInputCleared={onInputClearedSpy}
    onSearch={onSearchSpy}
    />);
});

test('should render Search component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});