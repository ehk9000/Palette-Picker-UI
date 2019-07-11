import { updateProject, selectCurrentProject, setLoading, setError } from '../actions';

export const fetchPutProject = (project) => {
  return async (dispatch) => {
    const base = "https://color-me-newton-api.herokuapp.com";
    const url = `${base}/api/v1/projects/${project.id}`;
    const body = JSON.stringify(project)
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

      const project = await response.json();
      dispatch(selectCurrentProject(project))
      dispatch(setLoading(false));
      dispatch(updateProject(project));
    } catch(error) {
      dispatch(setError(error.message));
    }
  }
}