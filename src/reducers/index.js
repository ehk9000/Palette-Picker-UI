import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer';
import { projectsReducer } from './projectsReducer';
import { palettesReducer } from './palettesReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  project: projectReducer,
  projects: projectsReducer,
  palettes: palettesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})