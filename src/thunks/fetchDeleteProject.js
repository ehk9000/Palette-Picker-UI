import { setLoading, setError, deleteProject, clearCurrentProject } from '../actions';

export const fetchDeleteProject = (id) => {
  return async (dispatch) => {
    const options = {
      method: 'DELETE'
    }

    const url = `http://localhost:3000/api/v1/projects/${id}`;
    
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