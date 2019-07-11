import { fetchAddPalette } from './fetchAddPalette';
import * as actions from '../actions';

describe('fetchAddPalette', () => {
  let mockPalette;
  let url;
  let options;
  let thunk;
  let mockDispatch;

  beforeEach(() => {
    mockPalette = {
      color_1: 'A8E0FF',
      color_2: '8EE3F5', 
      color_3: '70CAD1', 
      color_4: '3E517A', 
      color_5: 'B08EA2',
      name: 'test palette',
      project_name: 'Test' 
    }

    url = 'http://localhost:3000/api/v1/palettes';
    options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(mockPalette)
    }

    thunk = fetchAddPalette(mockPalette);
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:true,
        json: () => Promise.resolve(mockPalette)
      });
    });
  });
      it('should call dispatch with setLoading(true)', async () => {
        await thunk(mockDispatch);
  
        expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true))
      });
      it('should call fetch with the correct params', async () => {
        await thunk(mockDispatch);

        expect(window.fetch).toHaveBeenCalledWith(url, options);
      })
      it('should dispatch error if response is not ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok:false,
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
        mockDispatch.mockImplementation(() => mockPalette);

        await thunk(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(actions.addPalette(mockPalette))
      })
});