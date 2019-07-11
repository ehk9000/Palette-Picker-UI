import { fetchAddProject } from './fetchAddProject';
import * as actions from '../actions';

describe('fetchAddProject', () => {
  let mockProject;
  let url;
  let options;
  let thunk;
  let mockDispatch;

  beforeEach(() => {
    mockProject = {
      name: 'Tester'
    }

    url = 'http://localhost:3000/api/v1/projects';

    options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(mockProject)
    }

    thunk = fetchAddProject(mockProject);
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProject)
      });
    });
  });

  it('Should call disatch with setLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });
  it('should call fetch with the correct params', async () => {
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });
  it('should dispatch error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      });
    });

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Something went wrong'));
  });
  it('should dispatch setLoading(false) if response is ok', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  })

  it('should dispatch addPalette with the correct params', async () => {
    mockDispatch.mockImplementation(() => mockProject);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.addProject(mockProject))
  });
});