
import React from 'react';
import './Login.css';

function Login({ navigateTo, setUser }) {
  const handleOrcidLogin = () => {
    // TODO: Implementar login real com ORCID
    // window.location.href = 'https://orcid.org/oauth/authorize?...';
    console.log('Login com ORCID');
  };

  const handleCreateAccount = () => {
    // TODO: Redirecionar para criação de conta ORCID
    // window.open('https://orcid.org/register', '_blank');
    console.log('Criar conta ORCID');
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-icon">🔬</span>
          </div>
          <h1 className="login-title">ORCID++</h1>
          <p className="login-subtitle">Entre com sua conta ORCID</p>
        </div>

        <div className="login-card card">
          <div className="card-header">
            <h2 className="card-title">Fazer Login</h2>
            <p className="card-description">
              Acesse sua conta usando seu ORCID iD
            </p>
          </div>
          
          <div className="card-content">
            <button 
              className="orcid-button"
              onClick={handleOrcidLogin}
            >
              <div className="orcid-icon">🔗</div>
              <span>Entrar com ORCID iD</span>
              <span className="external-icon">↗</span>
            </button>

            <div className="info-section">
              <p className="info-text">
                Use seu ORCID iD para acessar de forma segura sua conta de pesquisador
              </p>
              
              <div className="orcid-info">
                <h4 className="info-title">O que é ORCID?</h4>
                <p className="info-description">
                  ORCID é um identificador único e persistente para pesquisadores. 
                  Conecta você com suas atividades de pesquisa e garante que seu trabalho seja devidamente creditado.
                </p>
              </div>
            </div>

            <div className="separator">
              <span>ou</span>
            </div>

            <div className="register-section">
              <p className="register-text">
                Não tem um ORCID iD?{' '}
                <button className="register-link" onClick={handleCreateAccount}>
                  Criar conta
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="login-footer">
          <p className="footer-text">
            Ao continuar, você concorda com nossos{' '}
            <button className="footer-link">Termos de Uso</button>{' '}
            e{' '}
            <button className="footer-link">Política de Privacidade</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
