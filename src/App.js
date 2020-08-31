import React from 'react';
import './App.css';
import Mensagem from './components/Mensagem';
import MensagensExibidas from './components/MensagensExibidas';


function App() {
  return (

    <div className="Mensagem-container">
      <MensagensExibidas />
      <Mensagem />
  
      <div className="mensagem-canva">
        <div className="mensagens-tela" ></div>
        <div className="inputs-tela">
          <input className="input-nome" onChange="" placeholder="Nome"/>
          <input className="input-mensagem" onChange="" placeholder="Sua mensagem"/>
          <button onChange="">Enviar</button>
        </div>
      </div>
    <div className="App">
    </div>
  );
}

export default App;
