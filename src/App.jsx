import React from 'react';
import Header from './Header';
import Publicacoes from './Publicacoes';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Publicacoes />
      </div>
      <div className="lateral esquerda"></div>
      <div className="lateral direita"></div>
    </>
  );
}

export default App;