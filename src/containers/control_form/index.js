import React, {Component} from 'react';
import ColorGenerator from '../color_generator';
import { connect } from 'react-redux';
import { selectCurrentPalette } from '../../actions';
import { fetchDeleteProject } from '../../thunks/fetchDeleteProject';

export class ControlForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project_name: this.setName(),
      project_palettes: []
    }
  }

  componentDidMount() {
    let { palettes, currentProject } = this.props;
    if (palettes.length && currentProject.id) {
      palettes = palettes.filter(palette => {
        return palette.project_id === currentProject.id;
      });
      if (palettes)
        this.setState({
          project_name: currentProject.name,
          project_palettes: palettes
        });
    }
  }

  setName = () => {
    return this.props.currentProject.name;
  }

  loadProject = () => {
    let { palettes, currentProject } = this.props;
    if (palettes.length && currentProject.id) {
      palettes = palettes.filter(palette => {
        return palette.project_id === currentProject.id;
      });
      if (palettes)
        this.setState({
          project_name: currentProject.name,
          project_palettes: palettes
        });
    }
  }

  filterPalettesByProject = (palettes, project_id) => {
    console.log('id', project_id)
    if (palettes.length && project_id) {
      return palettes.filter(palette => {
        return palette.project_id === project_id;
      })
    }
  }

  mapPalettes = (palettes) => {
    return palettes.map(pal => {
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

  handleDelete = (e) => {
    e.preventDefault();
    const { deleteProject, currentProject } = this.props;
    deleteProject(currentProject.id)
  }

  toggleProjectSave = () => {
    return this.props.currentProject.name ? 'Update' : 'Save';
  }

  render() {
    const { deleteProject, currentProject, palettes } = this.props;
    const matchingPalettes = currentProject.id && palettes.length && this.mapPalettes(this.filterPalettesByProject(palettes, currentProject.id))
    return (
      <section className="ControlForm">
        <form className="project">
          <input name="project_name" onChange={(e) => this.handleChange(e)} type="test" placeholder="Project Title" value={this.state.project_name || currentProject.name} />
          <div className="project-controls">
            <button className="project-save">{this.toggleProjectSave()}</button>
            <button className="project-delete" onClick={this.handleDelete}>Delete</button>
          </div>
        </form>
        <ColorGenerator />
        <section className="palettes">
          {matchingPalettes}
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
