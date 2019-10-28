import React, { useState } from 'react';

import './App.css';

import Tarefa from './components/Tarefa/Tarefa'
import Menu from './components/Menu/Menu'
import Novo from './components/Novo/Novo'

function App(props) {
  const [showAll, setShowAll] = useState(true);
  const [showPendentes, setShowPendentes] = useState(false);
  const [showFeitos, setShowFeitos] = useState(false);
  
  function handleTodos() {
      setShowAll(true)
      setShowPendentes(false)
      setShowFeitos(false)
  }

  function handlePendentes() {
      setShowAll(false)
      setShowPendentes(true)
      setShowFeitos(false)
  }
  function handleFeitos() {
      setShowAll(false)
      setShowPendentes(false)
      setShowFeitos(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Menu className="menuMain" handleTodos={() => handleTodos()} 
        handlePendentes={() => handlePendentes()}
        handleFeitos={() => handleFeitos()}
        />
        <Tarefa  show={showAll} stats={"all"}/>
        <Tarefa  show={showPendentes} stats={false}/>
        <Tarefa  show={showFeitos} stats={true}/>
        <Novo />
      </header>
    </div>
  );
}

export default App;
