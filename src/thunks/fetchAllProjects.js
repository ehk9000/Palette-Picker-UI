import { addAllProjects, setLoading, setError } from '../actions/index';

export const fetchAllProjects = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3000/api/v1/projects';

    try {
      dispatch(setLoading(true));

      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const projects = await response.json();


      dispatch(setLoading(false));
      dispatch(addAllProjects(projects));
    } catch(error) {
      dispatch(setError(error.message))
    }
  }
}