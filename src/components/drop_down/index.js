import React from 'react';
import { NavLink } from 'react-router-dom';

export const DropDown = () => {
  return (
    <section className="DropDown">
      <NavLink to="/">Create Project</NavLink>
      <div className="divider" />
      <NavLink to="/projects">Explore Projects</NavLink>
    </section>
  );
}

export default DropDown;