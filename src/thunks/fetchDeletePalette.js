import { setLoading, setError, deletePalette, clearCurrentPalette } from '../actions';

export const fetchDeletePalette = (id) => {
  return async (dispatch) => {
    const options = {
      method: 'DELETE'
    }

    const base = "https://color-me-newton-api.herokuapp.com";
    const url = `${base}/api/v1/palettes/${id}`

    try {
      dispatch(setLoading(true))

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(deletePalette(id));
      dispatch(clearCurrentPalette())
      dispatch(setLoading(false));
    } catch(error) {
      dispatch(setError(error.message))
    }
  }
}