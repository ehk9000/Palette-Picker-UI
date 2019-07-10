export const currentProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CURRENT_PROJECT':
      return action.project;
    case 'CLEAR_CURRENT_PROJECT':
      return {};
    default:
      return state;
  }
}