
import './App.css';
import Button from './components/Button.jsx';
import Screen from './components/Screen.jsx';
import ButtonClear from './components/ButtonClear.jsx';
import { useState } from 'react';
import {evaluate} from 'mathjs'


function App() {

  const [input, setInput] = useState('');

  const addValueToInput = val =>{
    if(isNaN(String(input).substr(-1)) && isNaN(val)){
      alert('No puedes ingresar dos operadores a la vez')
    }else{
      setInput(input + val) 
    }  
  };

  const calculateResult = () =>{
    console.log(input)
    if(input){
      setInput(evaluate(input));
      try {
        setInput(evaluate(input));
      } catch (error) {
        console.log('error')
      }
    }else{
      alert('Debes ingresar valores para realizar los calculos')
    }
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='calculator-container'>
        <Screen
          input={input}/>
        <div className='row'>
          <Button handlerClick={addValueToInput}>1</Button>
          <Button handlerClick={addValueToInput}>2</Button>
          <Button handlerClick={addValueToInput}>3</Button>
          <Button handlerClick={addValueToInput}>+</Button>
        </div>
        <div className='row'>
          <Button handlerClick={addValueToInput}>4</Button>
          <Button handlerClick={addValueToInput}>5</Button>
          <Button handlerClick={addValueToInput}>6</Button>
          <Button handlerClick={addValueToInput}>-</Button>
        </div>
        <div className='row'>
          <Button handlerClick={addValueToInput}>7</Button>
          <Button handlerClick={addValueToInput}>8</Button>
          <Button handlerClick={addValueToInput}>9</Button>
          <Button handlerClick={addValueToInput}>*</Button>
        </div>
        <div className='row'>
          <Button handlerClick={calculateResult}>=</Button>
          <Button handlerClick={addValueToInput}>0</Button>
          <Button handlerClick={addValueToInput}>.</Button>
          <Button handlerClick={addValueToInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear handlerClick={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
