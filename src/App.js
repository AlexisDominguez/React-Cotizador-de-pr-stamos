import React, {Fragment, useState} from 'react';
import './App.css';

import Header from "./components/Header";
import Form from "./components/Form";
import Message from "./components/Message";
import Result from './components/Result'
import Spinner from './components/Spinner'

function App() {

  const [quantity, saveQuantity] = useState(0);
  const [term, saveTerm] = useState(0);
  const [totalPrice, saveTotalPrice] = useState(0);
  const [loading, saveLoading] = useState(false);

  let component;

  if(totalPrice === 0 || isNaN(totalPrice)){
    component = <Message/>
  }else{
    component = <Result 
                totalPrice = {totalPrice}
                term = {term}
                quantity = {quantity}/>
  }

  if(loading){
    component = <Spinner/>;
  }

  return (
    <Fragment>
      <Header
        title = "Cotizador de préstamos"
      />
      
      <div className = "container">
        <Form
          quantity = {quantity}
          saveQuantity = {saveQuantity}
          term = {term}
          saveTerm = {saveTerm}
          saveTotalPrice = {saveTotalPrice}
          saveLoading = {saveLoading}
        />

        <div className ="mensajes">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
