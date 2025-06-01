
import React, { useState } from 'react';
import './EditarPerfil.css';

function EditarPerfil({ user, setUser, navigateTo }) {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    orcidId: user?.orcidId || '',
    institution: user?.institution || '',
    department: user?.department || '',
    role: user?.role || '',
    email: user?.email || '',
    bio: user?.bio || '',
    researchAreas: user?.researchAreas || [],
    institutionalPage: user?.institutionalPage || ''
  });
  
  const [newArea, setNewArea] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addResearchArea = () => {
    if (!newArea.trim()) return;
    setFormData(prev => ({
      ...prev,
      researchAreas: [...prev.researchAreas, newArea]
    }));
    setNewArea('');
  };

  const removeResearchArea = (index) => {
    setFormData(prev => ({
      ...prev,
      researchAreas: prev.researchAreas.filter((_, i) => i !== index)
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Implementar salvamento real
    // const saveProfile = async () => {
    //   try {
    //     const response = await fetch('/api/profile', {
    //       method: 'PUT',
    //       body: JSON.stringify(formData)
    //     });
    //   } catch (error) {
    //     console.log('Erro ao salvar:', error);
    //   }
    // };
    
    setUser(prev => ({ ...prev, ...formData }));
    console.log('Perfil salvo:', formData);
    navigateTo('perfil');
  };

  return (
    <div className="editar-perfil">
      <div className="container">
        <div className="editar-header">
          <button className="button-outline" onClick={() => navigateTo('perfil')}>
            ← Voltar
          </button>
          <h1 className="page-title">Editar Perfil</h1>
        </div>
        
        <form onSubmit={handleSave}>
          <div className="editar-section card">
            <h2 className="section-title">Informações Básicas</h2>
            
            <div className="form-grid">
              <div className="form-field">
                <label className="form-label">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">ORCID ID</label>
                <input
                  type="text"
                  name="orcidId"
                  value={formData.orcidId}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">Instituição</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">Departamento</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">Cargo / Função</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            </div>
            
            <div className="form-field">
              <label className="form-label">Biografia</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="textarea"
                rows="4"
              />
            </div>
          </div>
          
          <div className="editar-section card">
            <h2 className="section-title">Áreas de Pesquisa</h2>
            
            <div className="areas-display">
              {formData.researchAreas.map((area, index) => (
                <div key={index} className="area-tag">
                  <span>{area}</span>
                  <button 
                    type="button" 
                    onClick={() => removeResearchArea(index)}
                    className="remove-tag"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            
            <div className="add-area">
              <input
                type="text"
                value={newArea}
                onChange={(e) => setNewArea(e.target.value)}
                placeholder="Adicionar área de pesquisa"
                className="input"
              />
              <button 
                type="button" 
                onClick={addResearchArea}
                className="button"
              >
                ➕ Adicionar
              </button>
            </div>
          </div>
          
          <div className="editar-section card">
            <h2 className="section-title">Links Externos</h2>
            
            <div className="form-field">
              <label className="form-label">Página Institucional</label>
              <input
                type="url"
                name="institutionalPage"
                value={formData.institutionalPage}
                onChange={handleInputChange}
                className="input"
                placeholder="https://..."
              />
            </div>
          </div>
          
          <div className="editar-actions">
            <button type="submit" className="button save-button">
              💾 Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarPerfil;
