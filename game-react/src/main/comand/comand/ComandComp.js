import React from 'react';
import './ComandComp.scss';

const ComandComp = (props) => {
  // console.log("props=",props);

    return (
      <div className="comand">
        <p>Введите название для команды {props.id} </p>
        <input></input>
        <p>Текущее имя Вашей команды: <br></br>{props.name}</p>
        <p>Введите цевт для команды {props.id} </p>
        <p>Текущий цевт Вашей команды {props.color} </p>
        <div className="row">
          <button className="button back">Редактировать</button>
          <button className="button akcept">Принять</button>
        </div>
      </div>
    );
}

export default ComandComp;