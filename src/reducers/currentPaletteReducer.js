export const currentPaletteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CURRENT_PALETTE':
    console.log(action.palette)
      return action.palette;
    case 'CLEAR_CURRENT_PALETTE':
      return {};
    default:
      return state;
  }
}