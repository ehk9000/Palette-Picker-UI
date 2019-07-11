import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeletePalette } from '../../thunks/fetchDeletePalette';
import { fetchAddPalette } from '../../thunks/fetchAddPalette';
import { fetchPutPalette } from '../../thunks/fetchPutPalette';

export class ColorGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      palette_name: this.props.currentPalette.name || '',
      colors: [{}, {}, {}, {}, {}]
    }
  }

  componentDidMount() {
    const {colors} = this.state; 
    this.generateColors(colors)
  }

  componentDidUpdate(prevProps, prevState) {
    const {currentPalette} = this.props;
    const currentPaletteHasChanged = currentPalette.id && prevProps.currentPalette.id !== currentPalette.id
    if(currentPaletteHasChanged) {
      let colors = prevState.colors.map((color, i) => {
        return {hex: currentPalette[`color_${i+1}`], locked: color.locked};
      })
      this.setState({colors, palette_name: currentPalette.name});
    }
  }

  generateColors = (colors) => {
    colors = colors.map((color, i) => {
      const {locked} = color;
      if (locked) {
        return color;
      } else {
        return {hex: this.generateHex(), locked};
      }
    })
    this.setState({colors});
  }

  generateHex = () => {
    const characters = "0123456789ABCDEF";
    let hex = '';
    for (let i = 0; i < 6; i++) {
      hex += characters[(Math.floor(Math.random() * 16))];
    }
    return hex;
  }

  handleName = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  updateColor = (e) => {
    const newHex = e.target.value;
    const i = e.target.closest('.color-field').getAttribute('data-key');
    let state = {...this.state};
    state.colors[i].hex = newHex;
    this.setState(state);
  }

  handleLock = (e) => {
    const i = e.target.closest('.color-field').getAttribute('data-key');
    const { colors } = this.state;
    colors[i].locked = !colors[i].locked;
    this.setState({ colors })
  }

  handleDelete = (e) => {
    const {currentPalette, deletePalette} = this.props
    e.preventDefault()
    deletePalette(currentPalette.id)
  }

  handleShuffleClick = (e) => {
    e.preventDefault()
    const {colors} = this.state;
    this.generateColors(colors)
  }

  handleSavePalette = (e) => {
    e.preventDefault();
    const {colors, palette_name} = this.state;
    const {currentProject} = this.props;
    const newPalette = {
      color_1: colors[0].hex,
      color_2: colors[1].hex,
      color_3: colors[2].hex,
      color_4: colors[3].hex,
      color_5: colors[4].hex,
      name: palette_name,
      project_id: currentProject.id
    }
    this.props.addPalette(newPalette)
  }

  togglePaletteThunk = (e) => {
    e.preventDefault()
    const {addPalette, updatePalette, currentProject, currentPalette} = this.props;
    const {palette_name, colors} = this.state;
    const newPalette = {
      color_1: colors[0].hex,
      color_2: colors[1].hex,
      color_3: colors[2].hex,
      color_4: colors[3].hex,
      color_5: colors[4].hex,
      name: palette_name,
      project_id: currentProject.id
    }
    if (currentPalette.id) {
      newPalette.id = currentPalette.id;
      return updatePalette(newPalette)
    } else {
      return addPalette(newPalette)
    }
  }

  togglePaletteSaveText = () => {
    const {currentPalette} = this.props;
    return currentPalette.id ? 'Update' : 'Save';
  }

  render() {
    const {palette_name, colors} = this.state;
    const colorFields = colors[0].hex && colors.map((colorObj, index) => {
      const lockType = colorObj.locked ? 'lock' : 'lock-open';
      const i = index + 1;
      const hex = colors[index].hex;
      return (
        <fieldset key={index} data-key={index} className="color-field">
          <div id={`box${i}`}
            className="color-display" 
            style={{background: `#${hex}`}}>
            <i id={`color${i}`}
              className={`fas fa-${lockType}`}
              onClick={(e) => this.handleLock(e)} />
          </div>
          <input
            name={`color${i}`}
            onChange={(e) => this.updateColor(e)}
            value={hex}
            className="palette-color"
            type="text"
            maxLength="6"
          />
        </fieldset>
      )
    })

    return (
      <form className="ColorGenerator">
        <section className="palette-head">
          <input
            name="palette_name"
            onChange={this.handleName}
            value={palette_name}
            className="palette-name"
            type="text"
            placeholder="Palette Name"
            maxLength="10"
          />
          <span>
            <button onClick={this.handleShuffleClick} className="palette-shuffle">
              Shuffle Colors
              <i className="fas fa-dice" />
            </button>
          </span>
          <div className="palette-controls">
            <button className="palette-save" onClick={(e) => this.togglePaletteThunk(e)}>
              {this.togglePaletteSaveText()} Palette
              <i className="fas fa-save" />
            </button>
            <button className="palette-delete" onClick={(e) => this.handleDelete(e)}>
              Delete Palette
              <i className="far fa-trash-alt" />
            </button>
          </div>
        </section>
        <div className="colorField-container">{colorFields}</div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currentProject: state.currentProject,
  currentPalette: state.currentPalette,
  palettes: state.palettes
})

const mapDispatchToProps = (dispatch) => ({
  deletePalette: (id) => dispatch(fetchDeletePalette(id)),
  addPalette: (palette) => dispatch(fetchAddPalette(palette)),
  updatePalette: (palette) => dispatch(fetchPutPalette(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorGenerator);