
import React, { useState } from 'react';
import './EditarProjeto.css';

function EditarProjeto({ project, navigateTo }) {
  const [formData, setFormData] = useState({
    name: project?.name || '',
    description: project?.description || '',
    startYear: project?.startYear || new Date().getFullYear(),
    endYear: project?.endYear || '',
    funding: project?.funding || '',
    role: project?.role || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Implementar salvamento real
    // const saveProject = async () => {
    //   try {
    //     const response = await fetch('/api/projects', {
    //       method: project ? 'PUT' : 'POST',
    //       body: JSON.stringify(formData)
    //     });
    //   } catch (error) {
    //     console.log('Erro ao salvar:', error);
    //   }
    // };
    
    console.log('Projeto salvo:', formData);
    navigateTo('projetos');
  };

  return (
    <div className="editar-projeto">
      <div className="container">
        <div className="editar-header">
          <button className="button-outline" onClick={() => navigateTo('projetos')}>
            ← Voltar
          </button>
          <h1 className="page-title">
            {project ? 'Editar Projeto' : 'Novo Projeto'}
          </h1>
        </div>
        
        <form onSubmit={handleSave}>
          <div className="editar-section card">
            <div className="form-field">
              <label className="form-label">Nome do Projeto</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label className="form-label">Ano de Início</label>
                <input
                  type="number"
                  name="startYear"
                  value={formData.startYear}
                  onChange={handleInputChange}
                  className="input"
                  min="1900"
                  max="2100"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">Ano de Término</label>
                <input
                  type="number"
                  name="endYear"
                  value={formData.endYear}
                  onChange={handleInputChange}
                  className="input"
                  min="1900"
                  max="2100"
                  placeholder="Em andamento..."
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Financiamento</label>
              <input
                type="text"
                name="funding"
                value={formData.funding}
                onChange={handleInputChange}
                className="input"
                placeholder="Ex: FAPESP, CNPq, etc."
              />
            </div>

            <div className="form-field">
              <label className="form-label">Seu Papel no Projeto</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="input"
                placeholder="Ex: Coordenador, Pesquisador, etc."
              />
            </div>

            <div className="form-field">
              <label className="form-label">Descrição</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="textarea"
                rows="5"
                placeholder="Descreva os objetivos e metodologia do projeto..."
                required
              />
            </div>
          </div>
          
          <div className="editar-actions">
            <button type="submit" className="button save-button">
              💾 Salvar Projeto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarProjeto;
