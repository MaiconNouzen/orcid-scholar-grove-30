
import React, { useState } from 'react';
import './Publicacoes.css';

function Publicacoes({ publications, navigateTo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = filter === 'all' || pub.type === filter;
    
    return matchesSearch && matchesFilter;
  });

  const publicationTypes = [...new Set(publications.map(pub => pub.type))];

  return (
    <div className="publicacoes">
      <div className="container">
        <div className="publicacoes-header">
          <div className="flex-between">
            <h1 className="page-title">Minhas Publicações</h1>
            <button className="button">
              ➕ Nova Publicação
            </button>
          </div>
        </div>
        
        <div className="publicacoes-filters card">
          <div className="filter-row">
            <div className="search-box">
              <input
                type="text"
                className="input search-input"
                placeholder="🔍 Buscar publicações..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="filter-controls">
              <select 
                className="filter-select"
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Todas as publicações</option>
                {publicationTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="view-controls">
            <button 
              className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              🔲 Grade
            </button>
            <button 
              className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋 Lista
            </button>
          </div>
        </div>
        
        <div className={`publicacoes-content ${viewMode}`}>
          {filteredPublications.length === 0 ? (
            <div className="empty-state card text-center">
              <div className="empty-icon">📄</div>
              <h3>Nenhuma publicação encontrada</h3>
              <p>Tente utilizar termos de busca diferentes.</p>
            </div>
          ) : (
            filteredPublications.map((pub, index) => (
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
                  <div className="publication-actions">
                    <button className="button-outline">Ver detalhes</button>
                    <button 
                      className="button-outline"
                      onClick={() => navigateTo('editarPublicacao', pub)}
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

export default Publicacoes;
