import { addPalette, selectCurrentPalette, setLoading, setError } from '../actions';

export const fetchAddPalette = (palette) => {
  return async (dispatch) => {
    const base = "https://color-me-newton-api.herokuapp.com";
    const url = `${base}/api/v1/palettes`;
    const body = JSON.stringify(palette)
    const options = {
      method: 'POST',
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
      
      dispatch(addPalette(palette));
      dispatch(selectCurrentPalette(palette))
      dispatch(setLoading(false));
    } catch(error) {
      dispatch(setError(error.message));
    }
  }
}