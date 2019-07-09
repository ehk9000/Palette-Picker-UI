export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project];

    case 'ADD_ALL_PROJECTS':
      return action.projects;

    case 'UPDATE_PROJECT':
      const newState = state.map(project => {
        if (action.project.id === project.id) {
          return action.project;
        } else {
          return project
        }
      });

      return newState;

    case 'DELETE_PROJECT':
      const filteredState = state.filter(project => {
        return project.id !== action.id
      })

      return filteredState;
    default:
      return state
  }
}