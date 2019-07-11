import { addAllProjects, setLoading, setError } from '../actions/index';

export const fetchAllProjects = () => {
  return async (dispatch) => {
    const base = "https://color-me-newton-api.herokuapp.com";
    const url = `${base}/api/v1/projects`;

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