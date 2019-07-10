import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/Project/index';
import { fetchAddProject } from '../../thunks/fetchAddProject';
import './Project_list.scss';


export class Project_list extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
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

  handleChange = (e) => {
    const name = e.target.value;
    this.setState({ name })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addProject(this.state)
  }

 render() {
    const displayProjects = this.assignProjects();
    return (
      <div className="project-container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(e) => this.handleChange(e)} placeholder="Project Name" value={this.state.name} />
          <input type="submit" value="Create New Project" />
        </form>
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
  addProject: (project) => dispatch(fetchAddProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project_list);