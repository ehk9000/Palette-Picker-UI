import React, {Component} from 'react';
import ColorGenerator from '../color_generator';
import { connect } from 'react-redux';

class ControlForm extends Component {
  constructor() {
    super()
    this.state = {
      project_name: '',
      palettes: []
    }
  }

  componentDidMount() {
    let { palettes, currentProject } = this.props
    if (palettes.length && currentProject.id) {
      palettes = palettes.filter(palette => {
        return palette.project_id === currentProject.id;
      })
      if (palettes) this.setState({ palettes })
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
    let divColors = [];
    
    for (let i = 1; i <= 5; i++) {
      let tag = (
        <div key={`color_${i}`} 
          className="color-preview"
          style={{background: `#${palette[`color_${i}`]}`}} 
        />
      )

      divColors.push(tag)
    }

    return divColors;
  }

  render() {
    return (
      <section className="ControlForm">
        <form className="project">
          <input type="test" placeholder="Project Title" value={this.props.currentProject.name}/>
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

const mapStateToProps = (state) => ({
  currentProject: state.currentProject,
  palettes: state.palettes
})

export default connect(mapStateToProps)(ControlForm);
