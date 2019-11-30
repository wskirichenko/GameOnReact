import React from 'react';
import './Tems.scss';
import TemaComp from './tema/TemaComp';

const Tems = (props) => {
  // console.log("props=",props);
  let temaElem = props.tems.Tems.map(
    (tem) =><TemaComp id={tem.id} title={tem.title} description={tem.description} color={tem.color} key={tem.id} store={props.store}/>
  );
    return (
      <div className="Tems">
        <h2>Страница выбора Тем</h2>

        <div className="Tems__main">
          { temaElem }
        </div>

        <button className="button akcept"></button>
      </div>
    );
}

export default Tems;