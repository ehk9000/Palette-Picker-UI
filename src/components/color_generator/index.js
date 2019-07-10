import React, { Component } from 'react';

class ColorGenerator extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      palette_name: '',
      colors: [{}, {}, {}, {}, {}]
    }
  }

  componentDidMount() {
    this.generateColors()
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

  render() {
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
            value={this.state.colors[index].hex}
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
            onChange={e => this.handleName(e)}
            value={palette_name}
            className="palette-name"
            type="text"
            placeholder="Palette Name"
            maxLength="10"
          />
          <span>
            <button className="palette-shuffle">
              Shuffle Colors
              <i className="fas fa-dice" />
            </button>
          </span>
          <div className="palette-controls">
            <button className="palette-save">
              Save Palette
              <i className="fas fa-save" />
            </button>
            <button className="palette-delete">
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

export default ColorGenerator;