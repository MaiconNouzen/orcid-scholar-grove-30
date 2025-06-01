
import React from 'react';
import './NavBar.css';

function NavBar({ currentPage, navigateTo }) {
  const menuItems = [
    { key: 'home', label: 'Home', icon: '🏠' },
    { key: 'perfil', label: 'Perfil', icon: '👤' },
    { key: 'publicacoes', label: 'Publicações', icon: '📄' },
    { key: 'projetos', label: 'Projetos', icon: '💼' },
    { key: 'buscar', label: 'Buscar', icon: '🔍' },
    { key: 'editarPerfil', label: 'Editar Perfil', icon: '⚙️' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="logo">🔬</span>
          <span className="brand-text">ORCID++</span>
        </div>
        
        <div className="navbar-menu">
          {menuItems.map((item) => (
            <button
              key={item.key}
              className={`nav-item ${currentPage === item.key ? 'active' : ''}`}
              onClick={() => navigateTo(item.key)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </button>
          ))}
        </div>
        
        <div className="navbar-login">
          <button className="login-button" onClick={() => navigateTo('login')}>
            <span>🔑</span>
            <span>Login</span>
          </button>
        </div>
      </div>
      
      <div className="navbar-mobile">
        {menuItems.slice(0, 5).map((item) => (
          <button
            key={item.key}
            className={`mobile-nav-item ${currentPage === item.key ? 'active' : ''}`}
            onClick={() => navigateTo(item.key)}
          >
            <span className="mobile-icon">{item.icon}</span>
            <span className="mobile-text">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
