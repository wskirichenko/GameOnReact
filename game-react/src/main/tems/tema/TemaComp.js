import React from 'react';
import './TemaComp.scss';

const TemaComp = (props) => {
  console.log("props=",props);

    return (
      <div className="Tema" style={{ backgroundColor: props.color }} >
        <h3> { props.title } </h3>
        <div className="Tema__disctiption">
          { props.description }
        </div>
      </div>
    );
}

export default TemaComp;