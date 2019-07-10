import React from 'react';
import { shallow } from 'enzyme';
import { ColorGenerator } from './index';

describe('Color Generator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow ( <ColorGenerator/> )
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
