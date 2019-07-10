import React, {Component} from 'react';
import DropDown from '../drop_down';

export class Header extends Component {
  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }

  handleToggle = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render () {
    let icon;
    this.state.toggle
      ? icon = "fa-chevron-up"
      : icon = "fa-chevron-down";

    return (
      <header>
        <h1>Color-Me-Newton</h1>
        <div className="drop_down-toggle">
          <i className={`fas ${icon}`} onClick={this.handleToggle}/>
          {this.state.toggle && <DropDown />}
        </div>
      </header>
    );
  }
}

export default Header;