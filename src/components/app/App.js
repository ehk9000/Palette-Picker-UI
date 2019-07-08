import React,{ Component } from 'react';
import { Route, NavLink} from 'react-router-dom';
import Control_form  from '../control_form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      palettes: []
    }
  }

  componentDidMount() {
    this.getProjects()
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
      <header>
        <h1>Color-Me-Newton</h1>
        <section className="drop">
          <NavLink to='/'>Create Project</NavLink>
          <NavLink to='/projects'>Explore Projects</NavLink>
          <NavLink to='/palettes'>Explore Palettes</NavLink>
        </section>
      </header>
      <Route path="/" component={Control_form} />
    </div>
  );

    // <Route path="/projects" component={Project_list} />
    // <Route path="/palettes" component={Palettes_list} />
  }
}

export default App;
