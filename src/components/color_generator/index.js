import React, { Component } from 'react';

class ColorGenerator extends Component {
  constructor({ savePalette }) {
    super({ savePalette })
    this.state = {
      id: 0,
      palette_name: '',
      color1: {hex: '', lockType: 'lock-open'},
      color2: {hex: '', lockType: 'lock-open'},
      color3: {hex: '', lockType: 'lock-open'},
      color4: {hex: '', lockType: 'lock-open'},
      color5: {hex: '', lockType: 'lock-open'}
    }
  }

  handleName = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
  }

  handleColor = (e) => {
    const { name, value } = e.target;

    let color = this.state[name];
    color.hex = value;

    this.setState({ [name]: color });
  }

  handleLock = (e) => {
    const { id } = e.target;
    let color = this.state[id];
    console.log(id, color)
    // const lock = 'lock';
    // const unlock = 'lock-open';

    if (color.lockType === 'lock') {
      color.lockType = 'lock-open';
    } else {
      color.lockType = 'lock'
    }

    this.setState({ [id]: color })
  }

  render() {
    let {palette_name, color1, color2, color3, color4, color5} = this.state;

    console.log('CG_state:', this.state)
    return (
      <form className="ColorGenerator">
        <input
          name="palette_name"
          onChange={e => this.handleName(e)}
          value={palette_name}
          className="palette-name"
          type="text"
          placeholder="Palette Name"
          maxLength="10"
        />
        <fieldset className="color-field">
          <div id="box1"
            className="color-display" 
            style={{color: color1.hex}}>
            <i id="color1"
              className={`fas fa-${color1.lockType}`}
              onClick={(e) => this.handleLock(e)} />
          </div>
          <input
            name="color1"
            onChange={e => this.handleColor(e)}
            value={color1.hex}
            className="palette-color"
            type="text"
            placeholder="color1"
            maxLength="7"
            minLength="6"
          />
        </fieldset>
        <fieldset className="color-field">
          <div id="box2" 
            className="color-display" 
            style={{color: color2.hex}}>
            <i id="color2"
              className={`fas fa-${color2.lockType}`}
              onClick={(e) => this.handleLock(e)} />
          </div>
          <input
            name="color2"
            onChange={e => this.handleColor(e)}
            value={color2.hex}
            className="palette-color"
            type="text"
            placeholder="color2"
            maxLength="7"
            minLength="6"
          />
        </fieldset>
        <fieldset className="color-field">
          <div id="box3" 
            className="color-display" 
            style={{color: color3.hex}}>
            <i id="color3"
              className={`fas fa-${color3.lockType}`}
              onClick={(e) => this.handleLock(e)} />
          </div>
          <input
            name="color3"
            onChange={e => this.handleColor(e)}
            value={color3.hex}
            className="palette-color"
            type="text"
            placeholder="color3"
            maxLength="7"
            minLength="6"
          />
        </fieldset>
        <fieldset className="color-field">
          <div id="box4" 
            className="color-display" 
            style={{color: color4.hex}}>
            <i id="color4"
              className={`fas fa-${color4.lockType}`}
              onClick={(e) => this.handleLock(e)} />
          </div>
          <input
            name="color4"
            onChange={e => this.handleColor(e)}
            value={color4.hex}
            className="palette-color"
            type="text"
            placeholder="color4"
            maxLength="7"
            minLength="6"
          />
        </fieldset>
        <fieldset className="color-field">
          <div id="box5" 
            className="color-display" 
            style={{color: color5.hex}}>
            <i id="color5"
              className={`fas fa-${color5.lockType}`}
              onClick={(e) => this.handleLock(e)} />
          </div>
          <input
            name="color5"
            onChange={e => this.handleColor(e)}
            value={color5.hex}
            className="palette-color"
            type="text"
            placeholder="color5"
            maxLength="7"
            minLength="6"
          />
        </fieldset>
        <fieldset className="palette-controls">
          <input className="palette-save" type="submit" value="SAVE" />
          <button className="palette-delete">Delete</button>
          <span>
            <button className="palette-shuffle">Shuffle</button>
          </span>
        </fieldset>
      </form>
    );
  }
}

export default ColorGenerator;