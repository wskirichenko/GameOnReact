import React from 'react';
import './Meny.scss';
import logo from '../../src/logo.svg';


const Meny = () => {
    return (
      <div className="Meny">
        <img src={logo} className="Meny-logo" alt="logo" />
        <h2>Meny</h2>
      </div>
    );
}

export default Meny;
