import { combineReducers } from 'redux';
import { currentProjectReducer } from './currentProjectReducer';
import { currentPaletteReducer } from './currentPaletteReducer';
import { projectsReducer } from './projectsReducer';
import { palettesReducer } from './palettesReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  currentProject: currentProjectReducer,
  currentPalette: currentPaletteReducer,
  projects: projectsReducer,
  palettes: palettesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})