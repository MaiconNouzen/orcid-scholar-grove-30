
import React, { useState } from 'react';
import './Projetos.css';

function Projetos({ projects, navigateTo }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    return searchQuery === '' || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const calculateProgress = (project) => {
    const current = new Date().getFullYear();
    const start = project.startYear;
    const end = typeof project.endYear === 'number' ? project.endYear : parseInt(project.endYear);
    
    if (current < start) return 0;
    if (current > end) return 100;
    
    const total = end - start;
    const elapsed = current - start;
    
    return Math.round((elapsed / total) * 100);
  };

  return (
    <div className="projetos">
      <div className="container">
        <div className="projetos-header">
          <div className="flex-between">
            <h1 className="page-title">Meus Projetos de Pesquisa</h1>
            <button className="button">
              ➕ Novo Projeto
            </button>
          </div>
        </div>
        
        <div className="projetos-filters card">
          <div className="search-box">
            <input
              type="text"
              className="input search-input"
              placeholder="🔍 Buscar projetos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="projetos-grid">
          {filteredProjects.length === 0 ? (
            <div className="empty-state card text-center">
              <div className="empty-icon">💼</div>
              <h3>Nenhum projeto encontrado</h3>
              <p>Tente utilizar termos de busca diferentes.</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
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
                
                <div className="project-progress">
                  <div className="progress-header">
                    <span>Progresso</span>
                    <span className="progress-percentage">
                      {calculateProgress(project)}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${calculateProgress(project)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="project-footer">
                  <div className="project-stats">
                    <span>📄 {(project.publications?.length || 0)} publicações</span>
                  </div>
                  <div className="project-actions">
                    <button className="button-outline">Ver detalhes</button>
                    <button 
                      className="button-outline"
                      onClick={() => navigateTo('editarProjeto', project)}
                    >
                      ✏️ Editar
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

export default Projetos;
