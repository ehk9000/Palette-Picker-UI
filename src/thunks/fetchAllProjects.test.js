import { fetchAllProjects } from './fetchAllProjects';
import * as actions from '../actions';

describe('fetchAllProjects', () => {
  let mockProjects;
  let url;
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    mockProjects = [{
      name: 'test project',
    }]
    url = 'http://localhost:3000/api/v1/projects';
    mockDispatch = jest.fn();
    thunk = fetchAllProjects();

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProjects)
      });
    });
  });
  it('should dispatch setLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });
  it('should call fetch with the correct params', async () => {
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });
  it('should return an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      });
    });

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Something went wrong'));
  });
  it('should dispatch setLoading(false)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });
  it('should dispatch addAllNotes with the correct params', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.addAllProjects(mockProjects));
  });

});