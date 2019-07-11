import { setLoading, setError, deleteProject, clearCurrentProject } from '../actions';

export const fetchDeleteProject = (id) => {
  return async (dispatch) => {
    const options = {
      method: 'DELETE'
    }

    const base = "https://color-me-newton-api.herokuapp.com";
    const url = `${base}/api/v1/projects/${id}`;
    
    try {
      dispatch(setLoading(true))

      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(deleteProject(id));
      dispatch(clearCurrentProject())
      dispatch(setLoading(false));
    } catch(error) {
      dispatch(setError(error.message))
    }
  }
}