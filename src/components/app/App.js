import React,{ Component } from 'react';
import { Route, NavLink} from 'react-router-dom';

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
        </section>
      </header>
      <main>
        <section className="field-container">
          <section className="color-ladder">
            <div id="show_color1" className="show_color">
              <p>1</p>
              <div id="box-1" className="box"></div>
            </div>
            <div id="show_color2" className="show_color">
              <p>2</p>
              <div id="box-2" className="box"></div>
            </div>
            <div id="show_color3" className="show_color">
              <p>3</p>
              <div id="box-3" className="box"></div>
            </div>
            <div id="show_color4" className="show_color">
              <p>4</p>
              <div id="box-4" className="box"></div>
            </div>
            <div id="show_color5" className="show_color">
              <p>5</p>
              <div id="box-5" className="box"></div>
            </div>
          </section>
          <form className="proj-form">
            <input className="proj-title" type="text" placeholder="palette title" maxLength="10" />
            <input className="proj-color1" type="text" placeholder="color1" maxLength="7" minLength="6" />
            <input className="proj-color2" type="text" placeholder="color2" maxLength="7" minLength="6" />
            <input className="proj-color3" type="text" placeholder="color3" maxLength="7" minLength="6" />
            <input className="proj-color4" type="text" placeholder="color4" maxLength="7" minLength="6" />
            <input className="proj-color5" type="text" placeholder="color5" maxLength="7" minLength="6" />
            <input className="proj-save" type="submit" value="SAVE" />
          </form>
        </section>
      </main>
    </div>
  );
  }
}

export default App;
