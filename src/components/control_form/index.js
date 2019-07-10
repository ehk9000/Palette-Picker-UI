import React, {Component} from 'react';
import ColorGenerator from '../color_generator';

const samplePalettes = [
  {
    name: "palette_1",
    color_1: "69619C",
    color_2: "67615C",
    color_3: "19e19C",
    color_4: "11619C",
    color_5: "69214e"
  },
  {
    name: "palette_2",
    color_1: "F2D1C9",
    color_2: "8332AC",
    color_3: "E086D3",
    color_4: "6290C8",
    color_5: "69214e"
  },
  {
    name: "palette_1",
    color_1: "69619C",
    color_2: "67615C",
    color_3: "19e19C",
    color_4: "11619C",
    color_5: "69214e"
  },
  {
    name: "palette_2",
    color_1: "F2D1C9",
    color_2: "8332AC",
    color_3: "E086D3",
    color_4: "6290C8",
    color_5: "69214e"
  },
  {
    name: "palette_2",
    color_1: "F2D1C9",
    color_2: "8332AC",
    color_3: "E086D3",
    color_4: "6290C8",
    color_5: "69214e"
  },
  {
    name: "palette_1",
    color_1: "69619C",
    color_2: "67615C",
    color_3: "19e19C",
    color_4: "11619C",
    color_5: "69214e"
  }
]

export class ControlForm extends Component {
  constructor() {
    super()
    this.state = {
      project_name: '',
      palettes: samplePalettes
    }
  }

  mapPalettes = () => {
    return this.state.palettes.map(pal => {
      return (
        <article className="palette-item">
          <h3>{pal.name}</h3>
          <div className="colors-preview">
            {this.displayColors(pal)}
          </div>
        </article>
      )
    })
  }

  displayColors = (palette) => {
    let divColors= [];
    
    for (let i = 1; i <= 5; i++) {
      let tag = (
        <div key={`color_${i}`} 
          className="color-preview"
          style={{background: `#${palette[`color_${i}`]}`}} />
      )

      divColors.push(tag)
    }

    return divColors;
  }

  render() {
    return (
      <section className="ControlForm">
        <form className="project">
          <input type="test" placeholder="Project Title" />
          <div className="project-controls">
            <button className="project-save">Save</button>
            <button className="project-delete">Delete</button>
          </div>
        </form>
        <ColorGenerator />
        <section className="palettes">
          {this.state.palettes.length > 0 && this.mapPalettes()}
        </section>
      </section>
    );
  }
}

export default ControlForm;
