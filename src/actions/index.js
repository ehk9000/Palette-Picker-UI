export const addAllProjects = (projects) => ({
  type: 'ADD_ALL_PROJECTS',
  projects
})

export const addAllPalettes = (palettes) => ({
  type: 'ADD_ALL_PALETTES',
  palettes
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
