import { updatePalette, setLoading, setError } from '../actions';

export const fetchPutPalette = (project) => {
  return async (dispatch) => {
    const url = `http://localhost:3000/api/v1/palettes/${palette.id}`;
    const body = JSON.stringify(palette)
    const options = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body
    }
    
    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const palette = await response.json();
      dispatch(setLoading(false));
      dispatch(updatePalette(palette));
    } catch(error) {
      dispatch(setError(error.message));
    }
  }
}