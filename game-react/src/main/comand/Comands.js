import React from 'react';
import './Comands.scss';

const Comands = () => {
    return (
      <div className="Comands">
        <h2>Страница выбора команд</h2>
        <div className="Comands__main">
          <div className="comand">
            <p>Введите название Ваше команды:</p>
            <input></input>
            <label></label>
            <div className="row">
              <button className="button back">Редактировать</button>
              <button className="button akcept">Принять</button>
            </div>
          </div>

          <div className="comand">
            <p>Введите название Ваше команды:</p>
            <input></input>
            <label></label>
            <div className="row">
              <button className="button back">Редактировать</button>
              <button className="button akcept">Принять</button>
            </div>
          </div>
        </div>

      </div>
    );
}

export default Comands;