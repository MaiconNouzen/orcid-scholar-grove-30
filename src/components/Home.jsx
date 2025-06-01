
import React from 'react';
import './Home.css';

function Home({ navigateTo }) {
  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <h1 className="hero-title">ORCID++</h1>
          <p className="hero-subtitle">
            Conectando pesquisadores, compartilhando conhecimento científico
          </p>
          <div className="hero-buttons">
            <button className="button" onClick={() => navigateTo('buscar')}>
              🔍 Buscar Pesquisadores
            </button>
            <button className="button-outline" onClick={() => navigateTo('publicacoes')}>
              📄 Ver Publicações
            </button>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">Conecte-se</h3>
            <p className="feature-description">
              Encontre pesquisadores com interesses similares e estabeleça novas colaborações acadêmicas.
            </p>
            <button className="feature-link" onClick={() => navigateTo('buscar')}>
              Explorar Pesquisadores
            </button>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3 className="feature-title">Publicações</h3>
            <p className="feature-description">
              Descubra as mais recentes pesquisas e publicações científicas da comunidade acadêmica.
            </p>
            <button className="feature-link" onClick={() => navigateTo('publicacoes')}>
              Ver Publicações
            </button>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3 className="feature-title">Projetos</h3>
            <p className="feature-description">
              Conheça os projetos de pesquisa em andamento e oportunidades de colaboração.
            </p>
            <button className="feature-link" onClick={() => navigateTo('projetos')}>
              Explorar Projetos
            </button>
          </div>
        </div>
        
        <div className="benefits-section">
          <h2 className="benefits-title">Benefícios do ORCID++</h2>
          <div className="benefits-grid">
            <div className="benefit-column">
              <h3 className="benefit-subtitle">Para Pesquisadores</h3>
              <ul className="benefit-list">
                <li>Aumente a visibilidade do seu trabalho acadêmico</li>
                <li>Encontre colaboradores para novos projetos</li>
                <li>Gerencie suas publicações e projetos em um só lugar</li>
                <li>Conecte-se com a comunidade científica global</li>
              </ul>
            </div>
            <div className="benefit-column">
              <h3 className="benefit-subtitle">Para Instituições</h3>
              <ul className="benefit-list">
                <li>Promova as pesquisas da sua instituição</li>
                <li>Descubra talentos e especialistas</li>
                <li>Acompanhe a produção científica dos seus pesquisadores</li>
                <li>Estabeleça parcerias interinstitucionais</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
