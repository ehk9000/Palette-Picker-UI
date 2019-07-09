import React, {Component} from 'react';
import ColorGenerator from '../color_generator';

class Control_form extends Component {
  constructor() {
    super()
    this.state = {
      project_name: '',
      palettes: []
    }
  }

  mapPalettes = () => {
    return this.state.palettes.map(pal => {
      return (
        <article className="palette-item">
          <h3>{pal.name}</h3>
        </article>
      )
    })
  }

  render() {
    return (
      <section className="Control_form">
        <section className="project">
          <form>
            <input type="test" placeholder="Project Title" />
            <button className="project-save">Save</button>
            <button className="project-delete">Delete</button>
          </form>
        </section>
        <ColorGenerator />
        <section className="palettes">
          {this.state.palettes.length > 0 && this.mapPalettes }
        </section>
      </section>
    );
  }
}

export default Control_form;
