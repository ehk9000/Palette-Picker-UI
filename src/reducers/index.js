import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { palettesReducer } from './palettesReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})