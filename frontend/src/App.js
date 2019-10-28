import React, { useState } from 'react';

import './App.css';

import Tarefa from './components/Tarefa/Tarefa'
import Menu from './components/Menu/Menu'
import Novo from './components/Novo/Novo'

function App(props) {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  
  function handleTodos() {
      setShow1(true)
      setShow2(false)
      setShow3(false)
  }

  function handlePendentes() {
      setShow1(false)
      setShow2(true)
      setShow3(false)
  }
  function handleFeitos() {
      setShow1(false)
      setShow2(false)
      setShow3(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Menu className="menuMain" handleTodos={() => handleTodos()} 
        handlePendentes={() => handlePendentes()}
        handleFeitos={() => handleFeitos()}
        />
        <Tarefa  show={show1} stats={"all"}/>
        <Tarefa  show={show2} stats={false}/>
        <Tarefa  show={show3} stats={true}/>
        <Novo />
      </header>
    </div>
  );
}

export default App;
