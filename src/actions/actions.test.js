import * as actions from './index';

describe('actions', () => {
  it('should return a type of addAllProjects with a projects array', () => {
    const projects = [
      {
        name:'Test',
        id: 1
      }
    ]
    const expected = {
      type: 'ADD_ALL_PROJECTS',
      projects
    }

    const result = actions.addAllProjects(projects)

    expect(result).toEqual(expected)
  });
  it('should return a type of addAllPalettes with a palettes array', () => {
    const palettes = [
      {
        id:1,
        project_id:3,
        name: 'test palette',
        color_1: 'A8E0FF',
        color_2: 'A8E0FF',
        color_3: 'A8E0FF',
        color_4: 'A8E0FF',
        color_5: 'A8E0FF',
      }

    ]
    const expected = {
      type: 'ADD_ALL_PALETTES',
      palettes
    }

    const result = actions.addAllPalettes(palettes)

    expect(result).toEqual(expected)
  })
  it('should return a type of setLoading with a boolean', () => {
    const bool = true;
    const expected = {
      type: 'SET_LOADING',
      isLoading: bool
    }

    const result = actions.setLoading(bool);

    expect(result).toEqual(expected);
  });
  it('should return a type of addProject with a new project', () => {
    const project = {
        name: 'Test',
        id: 1
      }

    
    const expected = {
      type: 'ADD_PROJECT',
      project
    }

    const result = actions.addProject(project)

    expect(result).toEqual(expected)
  });
  it('should return a type of addPalette with a new palette', () => {
    const palette = {
        id: 1,
        project_id: 3,
        name: 'test palette',
        color_1: 'A8E0FF',
        color_2: 'A8E0FF',
        color_3: 'A8E0FF',
        color_4: 'A8E0FF',
        color_5: 'A8E0FF',
      }

    const expected = {
      type: 'ADD_PALETTE',
      palette
    }

    const result = actions.addPalette(palette)

    
    expect(result).toEqual(expected)
  })
  it('should return a type of updatePalette with an updated palette', () => {
    const palette = {
      id: 1,
      project_id: 3,
      name: 'test palette',
      color_1: 'A8E0FF',
      color_2: 'SDFIDD',
      color_3: 'DFASDF',
      color_4: 'A8E0FF',
      color_5: 'DFASDF',
    }



    const expected = {
      type: 'UPDATE_PALETTE',
      palette
    }

    const result = actions.updatePalette(palette)

    expect(result).toEqual(expected)
  })
  it('should return a type of updateProject with a new project', () => {
    const project = {
      name: 'Test',
      id: 1
    }


    const expected = {
      type: 'UPDATE_PROJECT',
      project
    }

    const result = actions.updateProject(project)

    expect(result).toEqual(expected)
  });
  it('should return a type of setError with an error message', () => {
    const error = 'Something went wrong';
    const expected = {
      type: 'SET_ERROR',
      error
    };

    const result = actions.setError(error);

    expect(result).toEqual(expected);
  });

  it('should return a type of deleteProject with an id', () => {
    const id = 4;

    const expected = {
      type: 'DELETE_PROJECT',
      id
    };

    const result = actions.deleteProject(id);

    expect(result).toEqual(expected);
  });
  it('should return a type of deletePalette with an id', () => {
    const id = 1;

    const expected = {
      type: 'DELETE_PALETTE',
      id
    };

    const result = actions.deletePalette(id);

    expect(result).toEqual(expected);
  });

})