import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './component/Greeting';
import Counter from './component/Counter';

const name = 'Newton';

function App() {
  return (
    <div className="App">
      <Greeting  name={name}/>
      <Counter />
    </div>
  );
}

export default App;
