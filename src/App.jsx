
import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Perfil from './components/Perfil';
import Publicacoes from './components/Publicacoes';
import Projetos from './components/Projetos';
import Buscar from './components/Buscar';
import EditarPerfil from './components/EditarPerfil';
import EditarPublicacao from './components/EditarPublicacao';
import EditarProjeto from './components/EditarProjeto';
import Pesquisador from './components/Pesquisador';
import Login from './components/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);
  const [researchers, setResearchers] = useState([]);
  const [selectedResearcher, setSelectedResearcher] = useState(null);
  const [editingPublication, setEditingPublication] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  // Mock data - substituir por useEffect com fetch do ORCID
  useEffect(() => {
    // TODO: Implementar busca real do ORCID
    // const fetchUserData = async () => {
    //   try {
    //     const response = await fetch('https://api.orcid.org/...');
    //     const data = await response.json();
    //     setCurrentUser(data);
    //   } catch (error) {
    //     console.log('Erro ao buscar dados:', error);
    //   }
    // };
    // fetchUserData();

    // Mock data temporário
    setCurrentUser({
      name: 'Dr. Maria Silva',
      orcidId: '0000-0000-0000-0000',
      institution: 'Universidade Federal do Brasil',
      department: 'Departamento de Ciência da Computação',
      bio: 'Pesquisadora em Inteligência Artificial e Machine Learning.',
      email: 'maria.silva@universidade.br',
      researchAreas: ['Inteligência Artificial', 'Machine Learning', 'Visão Computacional'],
      publications: [
        {
          id: '1',
          title: 'Advances in Deep Learning for Computer Vision',
          authors: ['Maria Silva', 'João Santos'],
          year: 2023,
          type: 'Journal Article',
          source: 'IEEE Transactions on Pattern Analysis',
          abstract: 'Este artigo apresenta avanços recentes em deep learning...'
        }
      ],
      projects: [
        {
          id: '1',
          name: 'Projeto de Visão Computacional',
          description: 'Desenvolvimento de algoritmos de visão computacional para análise médica.',
          startYear: 2022,
          endYear: 2024,
          funding: 'CNPq'
        }
      ]
    });

    setResearchers([
      {
        orcidId: '0000-0000-0000-0001',
        name: 'Dr. João Santos',
        institution: 'USP',
        researchAreas: ['Física Quântica'],
        publications: [],
        projects: []
      }
    ]);
  }, []);

  const navigateTo = (page, data = null) => {
    setCurrentPage(page);
    if (data) {
      if (page === 'pesquisador') {
        setSelectedResearcher(data);
      } else if (page === 'editarPublicacao') {
        setEditingPublication(data);
      } else if (page === 'editarProjeto') {
        setEditingProject(data);
      }
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'perfil':
        return <Perfil user={currentUser} navigateTo={navigateTo} />;
      case 'publicacoes':
        return <Publicacoes publications={currentUser?.publications || []} navigateTo={navigateTo} />;
      case 'projetos':
        return <Projetos projects={currentUser?.projects || []} navigateTo={navigateTo} />;
      case 'buscar':
        return <Buscar researchers={researchers} navigateTo={navigateTo} />;
      case 'editarPerfil':
        return <EditarPerfil user={currentUser} setUser={setCurrentUser} navigateTo={navigateTo} />;
      case 'editarPublicacao':
        return <EditarPublicacao publication={editingPublication} navigateTo={navigateTo} />;
      case 'editarProjeto':
        return <EditarProjeto project={editingProject} navigateTo={navigateTo} />;
      case 'pesquisador':
        return <Pesquisador researcher={selectedResearcher} navigateTo={navigateTo} />;
      case 'login':
        return <Login navigateTo={navigateTo} setUser={setCurrentUser} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app">
      <NavBar currentPage={currentPage} navigateTo={navigateTo} />
      <div className="main-content">
        {renderCurrentPage()}
      </div>
    </div>
  );
}

export default App;
