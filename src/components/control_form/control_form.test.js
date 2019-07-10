import React from 'react';
import { shallow } from 'enzyme'
import { ControlForm } from './index';

describe('ControlForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <ControlForm/> )
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})