import { fetchDeletePalette } from './fetchDeletePalette';
import * as actions from '../actions';

describe('fetchDeletePalette', () => {
  let mockPalette;
  let url;
  let options;
  let mockDispatch;
  let thunk;
  let id;

  beforeEach(() => {
    mockPalette = {
      id: 1,
      color_1: 'A8E0FF',
      color_2: '8EE3F5',
      color_3: '70CAD1',
      color_4: '3E517A',
      color_5: 'B08EA2',
      name: 'test palette',
      project_name: 'Test' 
    }

    id = mockPalette.id

    url = `http://localhost:3000/api/v1/palettes/${id}`;

    options = {
      method: 'DELETE'
    }

    mockDispatch = jest.fn();

    thunk = fetchDeletePalette(id);

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
        statusText: 'Palette not found'
      });
    });

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Palette not found'));
  });
  it('should dispatch deletePalette(id) with the correct params', async () => {
    mockDispatch.mockImplementation(() => id);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.deletePalette(id));
  });
  it('should dispatch setLoading(false) if response is ok', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });
});