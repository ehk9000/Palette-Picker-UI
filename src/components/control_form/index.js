import React, {Component} from 'react';

class Control_form extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className="Control_form">
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
    );
  }
}

export default Control_form;
