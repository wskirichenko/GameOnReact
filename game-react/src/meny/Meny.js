import React from 'react';
import './Meny.scss';
import logo from '../../src/logo.svg';
import { NavLink } from "react-router-dom";

const Meny = () => {
    return (
      <div className="Meny">
        <img src={logo} className="Meny-logo" alt="logo" />
        <h2>Meny</h2>
        <nav className="Meny__items">
          <NavLink className="nav" exact to="/">Страница выбора команд</NavLink>
          <NavLink className="nav" to="/tems">Страница выбора тем</NavLink>
          <NavLink className="nav" to="/main">Главная страница</NavLink>
          <NavLink className="nav" to="/questens">Страница выброного вопроса</NavLink>
          <NavLink className="nav" to="/results">Страница Результата</NavLink>
        </nav>
      </div>
    );
}

export default Meny;
