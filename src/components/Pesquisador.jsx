
import React, { useState } from 'react';
import './Pesquisador.css';

function Pesquisador({ researcher, navigateTo }) {
  const [activeTab, setActiveTab] = useState('perfil');

  if (!researcher) {
    return (
      <div className="container">
        <div className="card text-center">
          <h2>Pesquisador não encontrado</h2>
          <button className="button" onClick={() => navigateTo('buscar')}>
            Voltar para Busca
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pesquisador">
      <div className="container">
        <div className="pesquisador-header">
          <button className="button-outline" onClick={() => navigateTo('buscar')}>
            ← Voltar
          </button>
        </div>

        <div className="pesquisador-tabs">
          <div className="tabs-nav">
            <button 
              className={`tab-button ${activeTab === 'perfil' ? 'active' : ''}`}
              onClick={() => setActiveTab('perfil')}
            >
              👤 Perfil
            </button>
            <button 
              className={`tab-button ${activeTab === 'publicacoes' ? 'active' : ''}`}
              onClick={() => setActiveTab('publicacoes')}
            >
              📄 Publicações
            </button>
            <button 
              className={`tab-button ${activeTab === 'projetos' ? 'active' : ''}`}
              onClick={() => setActiveTab('projetos')}
            >
              💼 Projetos
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'perfil' && (
              <div className="perfil-tab">
                <div className="pesquisador-info card">
                  <div className="pesquisador-avatar">
                    <div className="avatar-circle">
                      {researcher.name.charAt(0)}
                    </div>
                  </div>
                  
                  <h1 className="pesquisador-name">{researcher.name}</h1>
                  <p className="pesquisador-orcid">ORCID iD: {researcher.orcidId}</p>
                  
                  <div className="pesquisador-details">
                    <div className="detail-item">
                      <strong>🏢 Instituição:</strong> {researcher.institution}
                    </div>
                    {researcher.department && (
                      <div className="detail-item">
                        <strong>📚 Departamento:</strong> {researcher.department}
                      </div>
                    )}
                  </div>
                  
                  {researcher.bio && (
                    <div className="pesquisador-bio">
                      <h3>Biografia</h3>
                      <p>{researcher.bio}</p>
                    </div>
                  )}
                  
                  <div className="pesquisador-areas">
                    <h3>Áreas de Pesquisa</h3>
                    <div className="areas-tags">
                      {researcher.researchAreas.map((area, index) => (
                        <span key={index} className="tag">{area}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'publicacoes' && (
              <div className="publicacoes-tab">
                <div className="publicacoes-list">
                  {researcher.publications.length === 0 ? (
                    <div className="empty-state card text-center">
                      <div className="empty-icon">📄</div>
                      <h3>Nenhuma publicação encontrada</h3>
                    </div>
                  ) : (
                    researcher.publications.map((pub, index) => (
                      <div key={index} className="publication-card card">
                        <div className="publication-icon">📄</div>
                        <div className="publication-content">
                          <h3 className="publication-title">{pub.title}</h3>
                          <p className="publication-authors">
                            {Array.isArray(pub.authors) ? pub.authors.join(', ') : pub.authors}
                          </p>
                          <div className="publication-meta">
                            <span className="tag">{pub.type}</span>
                            <span className="tag">{pub.year}</span>
                          </div>
                          <p className="publication-source">{pub.source}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'projetos' && (
              <div className="projetos-tab">
                <div className="projetos-list">
                  {researcher.projects.length === 0 ? (
                    <div className="empty-state card text-center">
                      <div className="empty-icon">💼</div>
                      <h3>Nenhum projeto encontrado</h3>
                    </div>
                  ) : (
                    researcher.projects.map((project) => (
                      <div key={project.id} className="project-card card">
                        <h3 className="project-title">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="project-info">
                          <div className="project-meta">
                            <span>📅 {project.startYear} - {project.endYear || 'Atual'}</span>
                          </div>
                          
                          {project.funding && (
                            <div className="project-funding">
                              <strong>💰 Financiamento:</strong> {project.funding}
                            </div>
                          )}
                        </div>
                        
                        <div className="project-stats">
                          <span>📄 {(project.publications?.length || 0)} publicações</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pesquisador;
