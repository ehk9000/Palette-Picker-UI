import { addProject, setLoading, setError } from '../actions';

export const fetchAddProject = (project) => {
  return async (dispatch) => {
    const url = 'http://localhost:3001/api/v1/projects';
    const body = {
      name: project.name
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

      const project = await response.json();

      dispatch(setLoading(false));
      dispatch(addProject(project));
    } catch(error) {
      dispatch(setError(error.message));
    }
  }
}