import React, {Component} from 'react';
import ColorGenerator from '../color_generator';
import { connect } from 'react-redux';
import { selectCurrentPalette } from '../../actions';
import { fetchDeleteProject } from '../../thunks/fetchDeleteProject';

export class ControlForm extends Component {
  constructor() {
    super()
    this.state = {
      project_name: '',
      project_palettes: []
    }
  }

  componentDidMount() {
    let { palettes, currentProject } = this.props
    if (palettes.length && currentProject.id) {
      palettes = palettes.filter(palette => {
        return palette.project_id === currentProject.id;
      })
      if (palettes) this.setState({ project_name: currentProject.name, project_palettes: palettes })
    }
  }

  mapPalettes = () => {
    return this.state.project_palettes.map(pal => {
      return (
        <article key={pal.id} onClick={() => this.props.selectCurrentPalette(pal)} className="palette-item">
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

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    const { deleteProject, currentProject } = this.props;
    return (
      <section className="ControlForm">
        <form className="project">
          <input name="project_name" onChange={(e) => this.handleChange(e)} type="test" placeholder="Project Title" value={this.props.currentProject.name}/>
          <div className="project-controls">
            <button className="project-save">Save</button>
            <button className="project-delete" onClick={() => deleteProject(currentProject.id)}>Delete</button>
          </div>
        </form>
        <ColorGenerator />
        <section className="palettes">
          {this.state.project_palettes.length > 0 && this.mapPalettes()}
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentProject: state.currentProject,
  palettes: state.palettes
});

const mapDispatchToProps = (dispatch) => ({
  selectCurrentPalette: (palette) => dispatch(selectCurrentPalette(palette)),
  deleteProject: (id) => dispatch(fetchDeleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlForm);
