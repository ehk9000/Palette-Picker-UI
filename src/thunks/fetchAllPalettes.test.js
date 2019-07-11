import { fetchAllPalettes } from './fetchAllPalettes';
import * as actions from '../actions';

describe('fetchAllPalettes', () => {
  let mockPalettes;
  let url;
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    mockPalettes = [{
      color_1: 'A8E0FF',
      color_2: '8EE3F5',
      color_3: '70CAD1',
      color_4: '3E517A',
      color_5: 'B08EA2',
      name: 'test palette',
      project_name: 'Test' 
      }]
    url = 'http://localhost:3000/api/v1/palettes';
    mockDispatch = jest.fn();
    thunk = fetchAllPalettes();

    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPalettes)
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

    expect(mockDispatch).toHaveBeenCalledWith(actions.addAllPalettes(mockPalettes));
  });

});