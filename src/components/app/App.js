import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllProjects } from '../../thunks/fetchAllProjects';
import { fetchAllPalettes } from '../../thunks/fetchAllPalettes';
import  Project_list from '../../containers/Project_list';
import ControlForm from '../../containers/control_form';
import Header from '../header';
require("dotenv").config();
process.env.

export class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      palettes: []
    }
  }

  componentDidMount() {
    this.props.fetchAllProjects()
    this.props.fetchAllPalettes()
  }

  render() {
    return (
    <div className="App">
      <Header />
      <main>
        <Route exact path="/" component={ControlForm} />
        <Route exact path="/createNewProject" component={ControlForm} />
        <Route path="/projects" component={Project_list} />
      </main>
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
  fetchAllProjects: () => dispatch(fetchAllProjects()),
  fetchAllPalettes: () => dispatch(fetchAllPalettes()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
