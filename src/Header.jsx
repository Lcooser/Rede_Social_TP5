import React from 'react';
import './style.css';
import casa from './imgs/silhueta-de-icone-de-casa.png';
import atividades from './imgs/ativo.png';
import perfil from './imgs/do-utilizador.png';
import logo from './imgs/ciencias-sociais.png';
import lupa from './imgs/lupa.png';




function Header() {
  return (
    <header className="header">
      <div className="first-div-header">
        <a href="#" className="icone">
          <img src={casa} alt="Home" />
        </a>
        <a href="#" className="icone">
          <img src={atividades}  alt="Atividades" />
        </a>
        <a href="#" className="icone">
          <img src={perfil} alt="Perfil" />
        </a>
      </div>

      <div className="second-div-header">
        <img src={logo} alt="Logo" className="icone" />
        <h1 className="rede">REDE</h1>
      </div>

      <div className="espaco"></div>

      <div className="pesquisa">
        <a href="#" className="icone">
          <img src={lupa} alt="Pesquisar" className="icone" />
        </a>
        <input type="text" placeholder="Pesquisar" />
      </div>
    </header>
  );
}

export default Header;