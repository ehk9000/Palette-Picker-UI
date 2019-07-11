import { updateProject, selectCurrentProject, setLoading, setError } from '../actions';

export const fetchPutProject = (project) => {
  return async (dispatch) => {
    const url = `http://localhost:3000/api/v1/palettes/${project.id}`;
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
      console.log(project)
      dispatch(selectCurrentProject(project))
      dispatch(setLoading(false));
      dispatch(updateProject(project));
    } catch(error) {
      dispatch(setError(error.message));
    }
  }
}