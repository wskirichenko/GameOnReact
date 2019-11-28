import React from 'react';
import './MainContent.scss';
import { Route } from "react-router-dom";
import Comands from "./comand/Comands";

const MainContent = (props) => {
// console.log(props);
  let ComandsPage  = ( () => <Comands comands={props.store.getState()} store={props.store}/>);
    return (
      <div className="MainContent">
        <Route exact path='/'  render={ ComandsPage }/>
        {/* <Route path='/profile' render={ ProfileComponent }/>
        <Route path='/dialog'  render={ DialogComponent }/>
        <Route path='/news'    component={ News }/> */}
      </div>
    );
}

export default MainContent;
