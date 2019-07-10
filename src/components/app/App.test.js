import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { fetchAllPalettes } from '../../thunks/fetchAllPalettes';

jest.mock("../../thunks/fetchAllProjects");
jest.mock("../../thunks/fetchAllPalettes");


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <App fetchAllPalettes={fetchAllPalettes} fetchAllProjects={fetchAllProjects}/> );
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe("componentDidMount", () => {
    fetchAllPalettes.mockImplementation(() => { });
    fetchAllProjects.mockImplementation(() => { });

    it("should call fetchAllPalettes", () => {
      expect(fetchAllPalettes).toHaveBeenCalled();
    });
    it("should call fetchAllProjects", () => {
      expect(fetchAllProjects).toHaveBeenCalled();
    });
  });
});

