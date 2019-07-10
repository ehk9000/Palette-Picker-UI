import { addPalette, setLoading, setError } from '../actions';

export const fetchAddPalette = (palette) => {
  return async (dispatch) => {
    const url ='http://localhost:3001/api/v1/palettes';
    const body = {
      color_1: palette.color_1,
      color_2: palette.color_2,
      color_3: palette.color_3,
      color_4: palette.color_4,
      color_5: palette.color_5,
      name: palette.name,
      project_name: palette.project_name
    }

    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body)
    }

    try {
      dispatch(setLoading(true));

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const palette = await response.json();

      dispatch(setLoading(false));
      dispatch(addPalette(palette));
    } catch(error) {
      dispatch(setError(error.message));
    }
  }
}