import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../component/header'; 

test('should render Header component correctly', () => {
    const wrapper = shallow(<Header
        classes={{}}
        children={"hi"}
        />);
    expect(wrapper).toMatchSnapshot();
  });