import { projectsReducer } from './projectsReducer';
import * as actions from '../actions';

describe('projectsReducer', () => {
  let project = {
    id:2, name: 'Blue Project'
  }
  let projects = [project, {id:1, name: 'Yellow Project'}]

  it('should return default state', () => {
    const expected = [];
    const result = projectsReducer(undefined, {})

    expect(result).toEqual(expected);
  });

  describe('ADD_PROJECT', () => {
    it('should add a project to state tree ', () => {
      const expected = [project];
      const action = actions.addProject(project);
      const result = projectsReducer([], action);

      expect(result).toEqual(expected);
    });
  
  describe('ADD_ALL_PROJECTS', () => {
    it('should add all projects to the state tree', () => {
      const expected = projects;
      const action = actions.addAllProjects(projects);
      const result = projectsReducer([], action);

      expect(result).toEqual(expected);
    });
  });

  describe('UPDATE_PROJECT', () => {
    it('should update projects array on state tree', () => {
      let updateProject = {
        id: 2, name: 'Blue Project'
      }
      const action = actions.updateProject(updateProject)
      const updateProjects = [updateProject, {id:1, name:'Yellow Project'}]
      const expected = updateProjects;
      const result = projectsReducer(projects, action);

      expect(result).toEqual(expected);
    });
    it('Should not update projects array on state tree when no id matches', () => {
      let updateProject = {
        id: 12, name: 'Blue Project'
      }
      const action = actions.updateProject(updateProject);
      const expected = projects;
  
      const result = projectsReducer(projects, action);
  
      expect(result).toEqual(expected);
      });
    });
    describe('DELETE PROJECT', () => {
      it('Should delete a project', () => {
        const action = actions.deleteProject(1);

        const expected = [project];

        const result = projectsReducer(projects, action);

        expect(result).toEqual(expected)
      });
    });
  });
});