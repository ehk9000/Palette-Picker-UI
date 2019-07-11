import React from 'react';
import { shallow } from 'enzyme';
import { ColorGenerator, mapDispatchToProps, mapStateToProps } from './index';

describe('Color Generator', () => {
  let wrapper;
  let mockProjects = { id: 1, name: 'Test' }
  let mockPalettes = { id: 1, color_1: "SDFH", name: 'wave' }
  let mockCurrentPalette = { id: 1, color_1: "SDFH", name: "wave" }

  beforeEach(() => {
    wrapper = shallow ( <ColorGenerator
      projects={mockProjects}
      palettes={mockPalettes}
      currentPalette={mockCurrentPalette}
    /> )
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
