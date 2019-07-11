import { setLoading, setError, deletePalette, clearCurrentPalette } from '../actions';

export const fetchDeletePalette = (id) => {
  return async (dispatch) => {
    const options = {
      method: 'DELETE'
    }

    const url = `http://localhost:3000/api/v1/palettes/${id}`

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