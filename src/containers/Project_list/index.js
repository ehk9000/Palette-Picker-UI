import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/Project/index';
import { addProject } from '../../actions';
import './Project_list.scss';

class Project_list extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    const name = e.target.value;
    this.setState({ name })
  }

  assignProjects = () => {
   let { projects } = this.props;
   let displayProjects;
   
   if (projects && projects.length) {
     displayProjects = projects.map(project => 
       <Project {...project} key={project.id} />
     );
   } else {
     displayProjects = <div>
       <p>Projects will display here</p>
     </div>
   }
   return displayProjects;
 }

 render() {
    const displayProjects = this.assignProjects();
    return (
      <div className="project-container">
        <input type="text" onChange={this.handleChange()} placeholder="Project Name" value={this.state.name} />
        {displayProjects}
      </div>
    )
 }

}

const mapStateToProps = state => ({
  projects: state.projects,
  palettes: state.palettes
})

const mapDispatchToProps = dispatch => ({
  addProject: (project) => dispatch(addProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project_list);