import React, { useState, useEffect } from 'react';
import './style.css';

function Publicacoes() {
  
  const [publicacoes, setPublicacoes] = useState([]);

  const handleCurtir = (index) => {
    
    setPublicacoes((prevPublicacoes) => 
    prevPublicacoes.map((publicacao, i) =>
      i === index ? {...publicacao, numCurtidas: publicacao.numCurtidas + 1} : publicacao
       
      )  
    )
  };

  useEffect(() => {
    async function fetchPublicacoes() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const publiacoesLikes = data.map((publicacao) => ({
        ...publicacao,
        numCurtidas: 0,
        
      }))
      setPublicacoes(publiacoesLikes);
    }
    fetchPublicacoes();
  }, []);

  return (
    <section className="publicacoes">
      <div className="escrever-container">
        <form className="escrever-form">
          <textarea
            className="escrever-textarea"
            placeholder="Escreva aqui sua publicação"
          ></textarea>
          <button className="style-button">Publicar</button>
        </form>
      </div>
      <div className="publicacao-container">
        {publicacoes.map((publicacao, index) => (
          <div className="publicacao" key={index}>
            <h2>{publicacao.title}</h2>
            <p>{publicacao.body}</p>
            <p>Por User {publicacao.userId} em {publicacao.date}</p>
            <div className="acoes">
              <button className="style-button" onClick={() => handleCurtir(index)}>
                
                Like {publicacao.numCurtidas > 0 && <span>({publicacao.numCurtidas})</span>}
              </button>
              <button className="style-button">Comentar</button>
              <button className="style-button">Compartilhar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publicacoes;