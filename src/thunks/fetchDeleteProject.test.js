import { fetchDeleteProject } from './fetchDeleteProject';
import * as actions from '../actions';

describe('fetchDeleteProject', () => {
  let mockProject;
  let url;
  let options;
  let mockDispatch;
  let thunk;
  let id;

  beforeEach(() => {
    mockProject = {
      id: 1,
      name: 'test project',
    }

    id = mockProject.id

    url = `http://localhost:3000/api/v1/projects/${id}`;

    options = {
      method: 'DELETE'
    }

    mockDispatch = jest.fn();

    thunk = fetchDeleteProject(id);

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });
  });
  it('should dispatch with setLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true))
  });

  it('should call fetch with the correct params', async () => {
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });
  it('should dispatch error if response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Project not found'
      });
    });

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Project not found'));
  });
  it('should dispatch deleteProject(id) with the correct params', async () => {
    mockDispatch.mockImplementation(() => id);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.deleteProject(id));
  });
  it('should dispatch setLoading(false) if response is ok', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });
});