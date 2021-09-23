import React from 'react';
// { BrowserRouter} from 'react-router-dom';
//import { Registroinfo } from './Registroinfo';
import ReactDOM from 'react-dom';
import {Formdb} from './Formdb'
import './styles/styles.scss'

//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Router } from 'express';

ReactDOM.render(
    <Formdb />,
  document.getElementById('root')
);

/*function Index(){
  return (
    <BrowserRouter>
      <Route path="/registroInfo" component={Registroinfo} />
    </BrowserRouter>
  )
}

export default Index*/

