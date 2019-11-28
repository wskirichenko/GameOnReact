import React from 'react';
import './Comands.scss';
import ComandComp from './comand/ComandComp';

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
      </div>
    );
}

export default Comands;