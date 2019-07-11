import { addProject, selectCurrentProject, setLoading, setError } from '../actions';

export const fetchAddProject = (project) => {
  return async (dispatch) => {
    const base = `https://color-me-newton-api.herokuapp.com`;
    const url = `${base}/api/v1/projects`;
    const body = JSON.stringify(project)
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

      const project = await response.json();
      dispatch(setLoading(false));
      dispatch(addProject(project));
      dispatch(selectCurrentProject(project));
    } catch(error) {
      dispatch(setError(error.message));
    }
  }
}