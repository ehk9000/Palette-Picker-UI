import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeletePalette } from '../../thunks/fetchDeletePalette';
import { fetchAddPalette } from '../../thunks/fetchAddPalette';

export class ColorGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      palette_name: this.props.currentPalette.name || '',
      colors: [{}, {}, {}, {}, {}]
    }
  }

  componentDidMount() {
    this.generateColors()
  }

  bringInColors = () => {
    const {currentPalette} = this.props;
    let colors = [];
    for (let i = 1; i <= 5; i++) {
      let currColor = {
        hex: currentPalette[`color_${i}`],
        locked: false
      };
      colors.push(currColor)
    }
    this.setState({colors})
  }

  generateColors = () => {
    const colors = this.state.colors.map(color => {
      return {hex: this.generateHex(), locked: false};
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
    this.generateColors()
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

  render() {
    const {currentPalette} = this.props;
    const {palette_name, colors} = this.state;
    const colorFields = colors.map((colorObj, index) => {
      const lockType = colorObj.locked ? 'lock' : 'lock-open';
      const i = index + 1;
      return (
        <fieldset key={index} data-key={index} className="color-field">
          <div id={`box${i}`}
            className="color-display" 
            style={{background: `#${colorObj.hex}`}}>
            <i id={`color${i}`}
              className={`fas fa-${lockType}`}
              onClick={(e) => this.handleLock(e)} />
          </div>
          <input
            name={`color${i}`}
            onChange={(e) => this.updateColor(e)}
            value={currentPalette[`color_${i}`] || this.state.colors[index].hex}
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
            value={currentPalette.name || palette_name}
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
            <button className="palette-save" onClick={this.handleSavePalette}>
              Save Palette
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
  addPalette: (palette) => dispatch(fetchAddPalette(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorGenerator);