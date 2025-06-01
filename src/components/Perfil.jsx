
import React from 'react';
import './Perfil.css';

function Perfil({ user, navigateTo }) {
  if (!user) {
    return (
      <div className="container">
        <div className="card text-center">
          <h2>Carregando perfil...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="perfil">
      <div className="container">
        <div className="perfil-header">
          <button className="button-outline" onClick={() => navigateTo('home')}>
            ← Voltar
          </button>
        </div>

        <div className="perfil-content">
          <div className="perfil-info card">
            <div className="perfil-avatar">
              <div className="avatar-circle">
                {user.name.charAt(0)}
              </div>
            </div>
            
            <h1 className="perfil-name">{user.name}</h1>
            <p className="perfil-orcid">ORCID iD: {user.orcidId}</p>
            
            <div className="perfil-details">
              <div className="detail-item">
                <strong>🏢 Instituição:</strong> {user.institution}
              </div>
              {user.department && (
                <div className="detail-item">
                  <strong>📚 Departamento:</strong> {user.department}
                </div>
              )}
              {user.email && (
                <div className="detail-item">
                  <strong>📧 Email:</strong> {user.email}
                </div>
              )}
            </div>
            
            <div className="perfil-bio">
              <h3>Biografia</h3>
              <p>{user.bio}</p>
            </div>
            
            <div className="perfil-areas">
              <h3>Áreas de Pesquisa</h3>
              <div className="areas-tags">
                {user.researchAreas.map((area, index) => (
                  <span key={index} className="tag">{area}</span>
                ))}
              </div>
            </div>
            
            <div className="perfil-actions">
              <button className="button" onClick={() => navigateTo('editarPerfil')}>
                ⚙️ Editar Perfil
              </button>
            </div>
          </div>
          
          <div className="perfil-stats">
            <div className="stat-card card">
              <h3>📄 Publicações</h3>
              <div className="stat-number">{user.publications.length}</div>
              <button className="button-outline" onClick={() => navigateTo('publicacoes')}>
                Ver todas
              </button>
            </div>
            
            <div className="stat-card card">
              <h3>💼 Projetos</h3>
              <div className="stat-number">{user.projects.length}</div>
              <button className="button-outline" onClick={() => navigateTo('projetos')}>
                Ver todos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
