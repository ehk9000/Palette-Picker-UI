import React from 'react';
import { NavLink } from 'react-router-dom';

const DropDown = () => {
  return (
    <section className="Drop_down">
      <NavLink to="/">Create Project</NavLink>
      <NavLink to="/projects">Explore Projects</NavLink>
    </section>
  );
}

export default DropDown;