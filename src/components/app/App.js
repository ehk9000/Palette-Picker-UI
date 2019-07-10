import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import  Project_list from '../../containers/Project_list';
import Header from '../header';
import ControlForm  from '../control_form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      palettes: []
    }
  }

  componentDidMount() {
    this.props.fetchAllProjects()
    this.getPalettes()
  } 

  getProjects = async () => {
    const response = await fetch('http://localhost:3000/api/v1/projects');
    const projects = await response.json();
    this.setState({projects});
  }

  getPalettes = async () => {
    const response = await fetch('http://localhost:3000/api/v1/palettes');
    const palettes = await response.json();
    this.setState({palettes});
  } 

  render() {
    return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Control_form} />
      <Route path="/projects" component={Project_list} />

    </div>
  );

    // <Route path="/palettes" component={Palettes_list} />
  }
}

const mapStateToProps = ({projects, palettes}) => ({
  projects,
  palettes
});

const mapDispatchToProps = dispatch => ({
  fetchAllProjects: () => dispatch(fetchAllProjects()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
