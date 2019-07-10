import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './index';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Header/> )
  });
  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})