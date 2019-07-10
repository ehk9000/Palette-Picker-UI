export const selectCurrentPalette = (palette) => ({
  type: 'SELECT_CURRENT_PALETTE',
  palette
})

export const clearCurrentPalette = () => ({
  type: 'CLEAR_CURRENT_PALETTE'
})

export const selectCurrentProject = (project) => ({
  type: 'SELECT_CURRENT_PROJECT',
  project
})

export const clearCurrentProject = () => ({
  type: 'CLEAR_CURRENT_PROJECT'
})

export const addAllProjects = (projects) => ({
  type: 'ADD_ALL_PROJECTS',
  projects
})

export const addAllPalettes = (palettes) => ({
  type: 'ADD_ALL_PALETTES',
  palettes
})

export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project
})

export const addPalette = (palette) => ({
  type: 'ADD_PALETTE',
  palette
})

export const updateProject = (project) => ({
  type: 'UPDATE_PROJECT',
  project
})

export const updatePalette = (palette) => ({
  type: 'UPDATE_PALETTE',
  palette
})

export const deleteProject = (id) => ({
  type: 'DELETE_PROJECT',
  id
})

export const deletePalette = (id) => ({
  type: 'DELETE_PALETTE',
  id
})

export const setLoading = (bool) => ({
  type: 'SET_LOADING',
  isLoading: bool
})

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
})
