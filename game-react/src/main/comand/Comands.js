import React from 'react';
import './Comands.scss';
import ComandComp from './comand/ComandComp';
import { NavLink } from "react-router-dom";


const Comands = (props) => {

  let comandsElem = props.comands.Comands.map(
    (com) =><ComandComp id={com.id} name={com.name} time={com.time} color={com.color} key={com.id} store={props.store}/>
  );
    return (
      <div className="Comands">
        <h2>Страница выбора команд</h2>

        <div className="Comands__main">
          { comandsElem }
        </div>

        <button className="button akcept">
          <NavLink className="nav" to="/tems">Далее</NavLink>
        </button>
      </div>
    );
}

export default Comands;