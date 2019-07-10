import React from 'react';
import { shallow } from 'enzyme';
import { ColorGenerator, mapDispatchToProps, mapStateToProps } from './index';

describe('Color Generator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow ( <ColorGenerator/> )
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
