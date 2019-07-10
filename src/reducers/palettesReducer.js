export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALETTE':
      return [...state, action.palette];

    case 'ADD_ALL_PALETTES':
      return action.palettes;

    case 'UPDATE_PALETTE':
      const newState = state.map(palette => {
        if (action.palette.id === palette.id) {
          return action.palette;
        } else {
          return palette
        }
      });

      return newState;

    case 'DELETE_PALETTE':
      const filteredState = state.filter(palette => {
        return palette.id !== action.id
      })

      return filteredState;

    default:
      return state;
  }
}