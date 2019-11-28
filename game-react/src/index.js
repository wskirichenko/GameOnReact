import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import store from "./redux/stor";

// ---- Render component App -----------------------------
let renderMyTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,document.getElementById('root')
  );
}

renderMyTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  renderMyTree(state);
});