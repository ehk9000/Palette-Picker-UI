import { palettesReducer } from './palettesReducer';
import * as actions from '../actions';

describe('palettesReducer', () => {
  let palette = { 
    id: 2, project_id: 3, name: 'test palette', color_1: 'A8E0FF',
    color_2: '8EE3F5', color_3: '70CAD1', color_4: '3E517A', color_5:'B08EA2'
  }
  let palettes = [palette, {
    id: 4, project_id: 3, name: 'test palette 2', color_1: 'A8E0FF',
    color_2: '8EE3F5', color_3: '70CAD1', color_4: '3E517A', color_5: 'B08EA2' 
  }]

  it('should return default state', () => {
    const expected = [];
    const result = palettesReducer(undefined, {})

    expect(result).toEqual(expected);
  });

  describe('ADD_PALETTE', () => {
    it('should add palette to state tree', () => {
      const expected = [palette];
      const action = actions.addPalette(palette);
      const result = palettesReducer([], action);

      expect(result).toEqual(expected);
    });
  });

  describe('ADD_ALL_PALETTES', () => {
    it('should add all palettes to the state tree', () => {
      const expected = palettes;
      const action = actions.addAllPalettes(palettes);
      const result = palettesReducer([], action);

      expect(result).toEqual(expected)
    });
  });

  describe('UPDATE_PALETTE', () => {
    it('should update palettes array on state tree', () => {
      let updatePalette = {
        id: 2, project_id: 3, name: 'test palette', color_1: 'A8E0FF',
        color_2: '8EE3F5', color_3: '70CAD1', color_4: '3E517A', color_5: 'B08EA2'
      }
      const action = actions.updatePalette(updatePalette);
      const updatePalettes = [updatePalette, {
        id: 4, project_id: 3, name: 'test palette 2', color_1: 'A8E0FF',
        color_2: '8EE3F5', color_3: '70CAD1', color_4: '3E517A', color_5: 'B08EA2' 
        }]
      const expected = updatePalettes;
      const result = palettesReducer(palettes, action);

      expect(result).toEqual(expected);
    });
  });

  it('Should not update palettes array on state tree when no id matches', () => {
    let updatePalette = {
      id: 12, project_id: 3, name: 'test palette', color_1: 'A8E0FF',
      color_2: '8EE3F5', color_3: '70CAD1', color_4: '3E517A', color_5: 'B08EA2'
    }
    const action = actions.updatePalette(updatePalette);
    const expected = palettes;

    const result = palettesReducer(palettes, action);

    expect(result).toEqual(expected)
  })

  describe('DELETE PALETTE', () => {

    it('Should delete a palette', () => {
      const action = actions.deletePalette(4);

      const expected = [palette]

      const result = palettesReducer(palettes, action);

      expect(result).toEqual(expected)
    })
  })

  
});