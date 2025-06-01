
import React, { useState } from 'react';
import './EditarPublicacao.css';

function EditarPublicacao({ publication, navigateTo }) {
  const [formData, setFormData] = useState({
    title: publication?.title || '',
    authors: publication?.authors || [''],
    year: publication?.year || new Date().getFullYear(),
    type: publication?.type || 'Journal Article',
    source: publication?.source || '',
    abstract: publication?.abstract || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAuthorChange = (index, value) => {
    const newAuthors = [...formData.authors];
    newAuthors[index] = value;
    setFormData(prev => ({
      ...prev,
      authors: newAuthors
    }));
  };

  const addAuthor = () => {
    setFormData(prev => ({
      ...prev,
      authors: [...prev.authors, '']
    }));
  };

  const removeAuthor = (index) => {
    if (formData.authors.length > 1) {
      const newAuthors = formData.authors.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        authors: newAuthors
      }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Implementar salvamento real
    // const savePublication = async () => {
    //   try {
    //     const response = await fetch('/api/publications', {
    //       method: publication ? 'PUT' : 'POST',
    //       body: JSON.stringify(formData)
    //     });
    //   } catch (error) {
    //     console.log('Erro ao salvar:', error);
    //   }
    // };
    
    console.log('Publicação salva:', formData);
    navigateTo('publicacoes');
  };

  return (
    <div className="editar-publicacao">
      <div className="container">
        <div className="editar-header">
          <button className="button-outline" onClick={() => navigateTo('publicacoes')}>
            ← Voltar
          </button>
          <h1 className="page-title">
            {publication ? 'Editar Publicação' : 'Nova Publicação'}
          </h1>
        </div>
        
        <form onSubmit={handleSave}>
          <div className="editar-section card">
            <div className="form-field">
              <label className="form-label">Título</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="input"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Autores</label>
              <div className="authors-section">
                {formData.authors.map((author, index) => (
                  <div key={index} className="author-row">
                    <input
                      type="text"
                      placeholder="Nome do autor"
                      value={author}
                      onChange={(e) => handleAuthorChange(index, e.target.value)}
                      className="input"
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => removeAuthor(index)}
                      className="remove-button"
                      disabled={formData.authors.length <= 1}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
                <button 
                  type="button" 
                  onClick={addAuthor}
                  className="button-outline add-author"
                >
                  ➕ Adicionar autor
                </button>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label className="form-label">Ano</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="input"
                  min="1900"
                  max="2100"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">Tipo</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="input"
                  required
                >
                  <option value="Journal Article">Journal Article</option>
                  <option value="Conference Paper">Conference Paper</option>
                  <option value="Book Chapter">Book Chapter</option>
                  <option value="Book">Book</option>
                  <option value="Report">Report</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Fonte</label>
              <input
                type="text"
                name="source"
                value={formData.source}
                onChange={handleInputChange}
                className="input"
                placeholder="Nome da revista, conferência, etc."
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Resumo</label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleInputChange}
                className="textarea"
                rows="5"
                placeholder="Descreva brevemente o conteúdo da publicação..."
              />
            </div>
          </div>
          
          <div className="editar-actions">
            <button type="submit" className="button save-button">
              💾 Salvar Publicação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarPublicacao;
