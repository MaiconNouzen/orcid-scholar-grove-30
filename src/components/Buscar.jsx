
import React, { useState } from 'react';
import './Buscar.css';

function Buscar({ researchers, navigateTo }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResearchers = researchers.filter(researcher => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      researcher.name.toLowerCase().includes(query) ||
      researcher.institution.toLowerCase().includes(query) ||
      researcher.researchAreas.some(area => area.toLowerCase().includes(query))
    );
  });

  return (
    <div className="buscar">
      <div className="container">
        <h1 className="page-title">Buscar Pesquisadores</h1>
        
        <div className="buscar-filters card">
          <div className="search-box">
            <input
              type="text"
              className="input search-input"
              placeholder="🔍 Buscar por nome, instituição, área de pesquisa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="researchers-list">
          {filteredResearchers.length === 0 ? (
            <div className="empty-state card text-center">
              <div className="empty-icon">👤</div>
              <h3>Nenhum pesquisador encontrado</h3>
              <p>Tente utilizar termos de busca diferentes.</p>
            </div>
          ) : (
            filteredResearchers.map(researcher => (
              <div 
                key={researcher.orcidId} 
                className="researcher-card card"
                onClick={() => navigateTo('pesquisador', researcher)}
              >
                <div className="researcher-avatar">
                  <div className="avatar-circle">
                    {researcher.name.charAt(0)}
                  </div>
                </div>
                
                <div className="researcher-info">
                  <h2 className="researcher-name">{researcher.name}</h2>
                  
                  <div className="researcher-details">
                    <div className="detail-row">
                      <span className="detail-icon">🏢</span>
                      <span>{researcher.institution}</span>
                    </div>
                    
                    {researcher.department && (
                      <div className="detail-row">
                        <span className="detail-icon">📚</span>
                        <span>{researcher.department}</span>
                      </div>
                    )}
                    
                    <div className="detail-row">
                      <span className="detail-icon">📄</span>
                      <span>{researcher.publications.length} publicações</span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="detail-icon">💼</span>
                      <span>{researcher.projects.length} projetos</span>
                    </div>
                  </div>
                  
                  <div className="researcher-areas">
                    {researcher.researchAreas.slice(0, 3).map((area, index) => (
                      <span key={index} className="tag">{area}</span>
                    ))}
                    {researcher.researchAreas.length > 3 && (
                      <span className="tag more-tag">
                        +{researcher.researchAreas.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="researcher-action">
                    <button className="button-outline">
                      Ver perfil completo
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Buscar;
