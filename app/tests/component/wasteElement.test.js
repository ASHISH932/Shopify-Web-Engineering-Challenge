import React from 'react';
import { shallow } from 'enzyme';
import { WasteElement } from '../../component/WasteElement';
import waste from '../fixtures/waste';

let wrapper;
let onClickSpy;
beforeEach(() => {
  onClickSpy = jest.fn();

  wrapper = shallow(<WasteElement
    classes={{}}
    waste={waste[0]}
    onClick={onClickSpy}
    />);
});

test('should render WasteElement component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle favourite click', () => {
    const value = "hey";
    wrapper.find('i').simulate('click', { value });
    expect(onClickSpy).toHaveBeenCalledWith({ value });
  });