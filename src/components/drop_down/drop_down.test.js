import React from 'react';
import { shallow } from 'enzyme';
import { DropDown } from './index'

describe('DropDown', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <DropDown/>)
  })
  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})