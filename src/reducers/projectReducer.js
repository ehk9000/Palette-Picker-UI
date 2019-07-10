export const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_PROJECT':
      return action.project;
    default:
      return state
  }
}