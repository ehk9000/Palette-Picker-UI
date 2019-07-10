import { addAllPalettes, setLoading, setError } from '../actions/index';

export const fetchAllPalettes = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3000/api/v1/palettes';

    try {
      dispatch(setLoading(true));

      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const palettes = await response.json();

      dispatch(setLoading(false));
      dispatch(addAllPalettes(palettes));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}