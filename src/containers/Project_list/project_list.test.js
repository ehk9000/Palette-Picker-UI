import React from 'react';
import { shallow } from 'enzyme';
import { Project_list, mapStateToProps, mapDispatchToProps } from './index';


describe('Project_list', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <Project_list/> )
  })
  
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})