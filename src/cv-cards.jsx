import { useState } from "react";
  
const addParagraphToCard = (sectionId) => {
    const newParagraphId = `${sectionId}-added-${Date.now()}`;
    
    setSectionStyles(prev => ({
      ...prev,
      [newParagraphId]: {
        content: "New paragraph content - click Edit to modify",
        color: fontColor || '#000000'
      }
    }));
    
    setSelectedSection(newParagraphId);
  }
function Cards({ settings }) {
  if (!settings) return null;
  const { color, fontColor, fontSize, fontFamily, includePhoto = false, showEditButtons = true } = settings;
  
  const [sectionStyles, setSectionStyles] = useState({});
  const [selectedSection, setSelectedSection] = useState(null);
  const [editingSection, setEditingSection] = useState(null);
  const [editText, setEditText] = useState('');
  const [cards, setCards] = useState([
    'name-and-photo', 'contact-info', 'skills', 'experience', 'education', 'references'
  ]);
  
  const cardStyle = {
    backgroundColor: color,
    fontFamily: fontFamily,
    color: fontColor,
    ...(editingSection && { width: '100%', maxWidth: 'none' })
  };

  const getSectionStyle = (sectionId) => {
    return {
      ...cardStyle,
      ...sectionStyles[sectionId],
      ...(sectionStyles[sectionId]?.fontSize && { fontSize: sectionStyles[sectionId].fontSize }),
      color: sectionStyles[sectionId]?.color || fontColor || '#000000'
    };
  };

  const handleFontSizeChange = (sectionId) => {
    const fontSizes = ['12px', '14px', '16px', '18px', '20px', '22px'];
    const currentSize = sectionStyles[sectionId]?.fontSize || '16px'; 
    const currentIndex = fontSizes.indexOf(currentSize);
    const nextIndex = (currentIndex + 1) % fontSizes.length;
    const newSize = fontSizes[nextIndex];
    
    setSectionStyles(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        fontSize: newSize
      }
    }));
  };

  const handleFontColorChange = (sectionId, newColor) => {
    setSectionStyles(prev => ({
      ...prev, 
      [sectionId]: {
        ...prev[sectionId],
        color: newColor
      }
    }));
  };

  const handleTextEdit = (sectionId) => {
    const element = document.querySelector(`[data-section-id="${sectionId}"]`);
    if (element) {
      setEditingSection(sectionId);
      setEditText(element.innerText || element.textContent);
    }
  };

  const handleTextSave = (sectionId) => {
    const element = document.querySelector(`[data-section-id="${sectionId}"]`);
    if (element && editText.trim()) {
      element.innerText = editText;
      setEditingSection(null);
      setEditText('');
    }
  };

  const handleTextCancel = () => {
    setEditingSection(null);
    setEditText('');
  };

  const deleteLine = (sectionId) => {
    if (window.confirm('Are you sure you want to delete this line?')) {
      const element = document.querySelector(`[data-section-id="${sectionId}"]`);
      if (element) {
        element.style.display = 'none';
 
        
        setSectionStyles(prev => {
          const newStyles = { ...prev };
          delete newStyles[sectionId];
          return newStyles;
        });
      }
    }
  };

  const deleteDiv = (sectionId) => {
    if (window.confirm('Are you sure you want to delete this entire card?')) {
      const cardMappings = {
        'name-header': 'name-and-photo',
        'title-section': 'name-and-photo',
        'contact-header': 'contact-info',
        'contact-email': 'contact-info',
        'contact-phone': 'contact-info',
        'contact-linkedin': 'contact-info',
        'skills-header': 'skills',
        'skills-frontend': 'skills',
        'skills-testing': 'skills',
        'skills-version-control': 'skills',
        'skills-learning': 'skills',
        'experience-header': 'experience',
        'experience-years1': 'experience',
        'experience-title1': 'experience',
        'experience-detail1': 'experience',
        'experience-detail2': 'experience',
        'experience-years2': 'experience',
        'experience-title2': 'experience',
        'experience-detail3': 'experience',
        'experience-detail4': 'experience',
        'experience-detail5': 'experience',
        'education-header': 'education',
        'education-years': 'education',
        'education-school': 'education',
        'references-header': 'references',
        'references-text': 'references'
      };
      
      const cardToDelete = cardMappings[sectionId] || sectionId;
      
      setCards(prev => prev.filter(card => card !== cardToDelete));
      
      setSectionStyles(prev => {
        const newStyles = { ...prev };
        Object.keys(newStyles).forEach(key => {
          if (cardMappings[key] === cardToDelete) {
            delete newStyles[key];
          }
        });
        return newStyles;
      });
    }
  };

  const addNewCard = () => {
    const newCardId = `custom-card-${Date.now()}`;
    setCards(prev => [...prev, newCardId]);
  };

  const addParagraphToCard = (cardId) => {
    const newParagraphId = `${cardId}-paragraph-${Date.now()}`;
  };

  const renderEditButtons = (sectionId) => {
    if (showEditButtons === false) return null;
    
    if (editingSection === sectionId) {
      return (
        <div className="card-buttons-wrapper">
          <input 
            type="text" 
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{
              padding: '4px',
              marginRight: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button 
            className="card-buttons"
            onClick={() => handleTextSave(sectionId)}
            style={{ backgroundColor: '#4CAF50', color: 'white' }}
          >
            Save
          </button>
          <button 
            className="card-buttons"
            onClick={handleTextCancel}
            style={{ backgroundColor: '#f44336', color: 'white' }}
          >
            Cancel
          </button>
        </div>
      );
    }
    
    return (
      <div className="card-buttons-wrapper">
        <button 
          className="card-buttons"
          onClick={() => handleFontSizeChange(sectionId)} 
          title={`Current: ${sectionStyles[sectionId]?.fontSize || 'Default'}`}
        >
          Font Size ({sectionStyles[sectionId]?.fontSize || 'Default'})
        </button>
        <input 
          type="color" 
          className="color-picker-input" 
          value={sectionStyles[sectionId]?.color || fontColor || '#000000'}
          onChange={(e) => handleFontColorChange(sectionId, e.target.value)}
          title={`Text color: ${sectionStyles[sectionId]?.color || fontColor || '#000000'}`}
          style={{
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            marginLeft: '0.5rem',
            verticalAlign: 'middle',
          }}
        />
        <button 
          className="card-buttons"
          onClick={() => handleTextEdit(sectionId)}
        >
          Edit
        </button>
        <button 
          className="card-buttons"
          onClick={() => deleteLine(sectionId)}
          style={{ backgroundColor: '#ff9800', color: 'white' }}
        >
          Delete Line
        </button>
        <button 
          className="card-buttons"
          onClick={() => deleteDiv(sectionId)}
          style={{ backgroundColor: '#f44336', color: 'white' }}
        >
          Delete Card
        </button>
        <button 
          className="card-buttons"
          onClick={() => addParagraphToCard(sectionId)}
          style={{ backgroundColor: '#2196F3', color: 'white' }}
        >
          Add Paragraph
        </button>
      </div>
    );
  };

  const renderCard = (cardId) => {
    if (!cards.includes(cardId)) return null;

    switch (cardId) {
      case 'name-and-photo':
        return (
          <div className="name-and-photo card" style={getSectionStyle('name-and-photo')}>
            <div 
              className="photo" 
              style={{ display: "flex" }}
              onClick={() => handleSectionClick('name-and-photo')}
            >
              {includePhoto && <img src="https://via.placeholder.com/150" alt="Profile" className="profile-photo" />}
              <div className="section-wrapper">
                <h2 
                  style={getSectionStyle('name-header')}
                  data-section-id="name-header"
                >
                  Nikola Babić
                </h2>
                {renderEditButtons('name-header')}
              </div>
            </div>
            <div 
              className="section-wrapper"
              onClick={() => handleSectionClick('title-section')}
            >
              <p 
                style={getSectionStyle('title-section')}
                data-section-id="title-section"
              >
                Frontend Developer | React Enthusiast
              </p>
              {renderEditButtons('title-section')}
            </div>
          </div>
        );

      case 'contact-info':
        return (
          <div 
            className="contact-info card" 
            style={getSectionStyle('contact-info')}
            onClick={() => handleSectionClick('contact-info')}
          >
            <div className="section-wrapper">
              <h3 
                style={getSectionStyle('contact-header')}
                data-section-id="contact-header"
              >
                Contact Information
              </h3>
              {renderEditButtons('contact-header')}
            </div>
            <div className="section-wrapper">
              <p 
                style={getSectionStyle('contact-email')}
                data-section-id="contact-email"
              >
                <strong>Email:</strong> <a href="mailto:nikola94.babic@gmail.com">nikola94.babic@gmail.com</a>
              </p>
              {renderEditButtons('contact-email')}
            </div>
            <div className="section-wrapper">
              <p 
                style={getSectionStyle('contact-phone')}
                data-section-id="contact-phone"
              >
                <strong>Phone:</strong> <a href="tel:+381695255021">+381 69 525 5021</a>
              </p>
              {renderEditButtons('contact-phone')}
            </div>
            <div className="section-wrapper">
              <p 
                style={getSectionStyle('contact-linkedin')}
                data-section-id="contact-linkedin"
              >
                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nikola-babic-3639381a3" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/nikola-babic-3639381a3</a>
              </p>
              {renderEditButtons('contact-linkedin')}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div 
            className="skills card" 
            style={getSectionStyle('skills')}
            onClick={() => handleSectionClick('skills')}
          >
            <div className="section-wrapper">
              <h3 
                style={getSectionStyle('skills-header')}
                data-section-id="skills-header"
              >
                Technical Skills
              </h3>
              {renderEditButtons('skills-header')}
            </div>
            <ul>
              <div className="section-wrapper">
                <li 
                  style={getSectionStyle('skills-frontend')}
                  data-section-id="skills-frontend"
                >
                  <strong>Frontend:</strong> HTML, CSS, JavaScript, React, jQuery
                </li>
                {renderEditButtons('skills-frontend')}
              </div>
              <div className="section-wrapper">
                <li 
                  style={getSectionStyle('skills-testing')}
                  data-section-id="skills-testing"
                >
                  <strong>Testing:</strong> Jest
                </li>
                {renderEditButtons('skills-testing')}
              </div>
              <div className="section-wrapper">
                <li 
                  style={getSectionStyle('skills-version-control')}
                  data-section-id="skills-version-control"
                >
                  <strong>Version Control:</strong> Git
                </li>
                {renderEditButtons('skills-version-control')}
              </div>
              <div className="section-wrapper">
                <li 
                  style={getSectionStyle('skills-learning')}
                  data-section-id="skills-learning"
                >
                  <strong>Currently Learning:</strong> Node.js, Tailwind, SaaS, TypeScript
                </li>
                {renderEditButtons('skills-learning')}
              </div>
            </ul>
          </div>
        );

      case 'experience':
        return (
          <div 
            className="experience card" 
            style={getSectionStyle('experience')}
            onClick={() => handleSectionClick('experience')}
          >
            <div className="section-wrapper">
              <h3 
                style={getSectionStyle('experience-header')}
                data-section-id="experience-header"
              >
                Work Experience
              </h3>
              {renderEditButtons('experience-header')}
            </div>
            <div className="job-years">
              <div className="section-wrapper">
                <p 
                  style={getSectionStyle('experience-years1')}
                  data-section-id="experience-years1"
                >
                  <strong>2022 - 2023</strong>
                </p>
                {renderEditButtons('experience-years1')}
              </div>
              <div className="section-wrapper">
                <p 
                  className="job-title" 
                  style={getSectionStyle('experience-title1')}
                  data-section-id="experience-title1"
                >
                  Motherson Sumi
                </p>
                {renderEditButtons('experience-title1')}
              </div>
              <ul>
                <div className="section-wrapper">
                  <li 
                    style={getSectionStyle('experience-detail1')}
                    data-section-id="experience-detail1"
                  >
                    Rework Operator
                  </li>
                  {renderEditButtons('experience-detail1')}
                </div>
                <div className="section-wrapper">
                  <li 
                    style={getSectionStyle('experience-detail2')}
                    data-section-id="experience-detail2"
                  >
                    Quality Assurance
                  </li>
                  {renderEditButtons('experience-detail2')}
                </div>
              </ul>
            </div>
            <div className="job-years">
              <div className="section-wrapper">
                <p 
                  style={getSectionStyle('experience-years2')}
                  data-section-id="experience-years2"
                >
                  <strong>2018 - 2021 & 2023-2024</strong>
                </p>
                {renderEditButtons('experience-years2')}
              </div>
              <div className="section-wrapper">
                <p 
                  className="job-title" 
                  style={getSectionStyle('experience-title2')}
                  data-section-id="experience-title2"
                >
                  Freelance Coaching
                </p>
                {renderEditButtons('experience-title2')}
              </div>
              <ul>
                <div className="section-wrapper">
                  <li 
                    style={getSectionStyle('experience-detail3')}
                    data-section-id="experience-detail3"
                  >
                    Provided individual coaching for video game League of Legends
                  </li>
                  {renderEditButtons('experience-detail3')}
                </div>
                <div className="section-wrapper">
                  <li 
                    style={getSectionStyle('experience-detail4')}
                    data-section-id="experience-detail4"
                  >
                    Created algorithms for game strategy optimization
                  </li>
                  {renderEditButtons('experience-detail4')}
                </div>
                <div className="section-wrapper">
                  <li 
                    style={getSectionStyle('experience-detail5')}
                    data-section-id="experience-detail5"
                  >
                    Coaching provided to players of various skill levels and nationalities
                  </li>
                  {renderEditButtons('experience-detail5')}
                </div>
              </ul>
            </div>
          </div>
        );

      case 'education':
        return (
          <div 
            className="education card" 
            style={getSectionStyle('education')}
            onClick={() => handleSectionClick('education')}
          >
            <div className="section-wrapper">
              <h3 
                style={getSectionStyle('education-header')}
                data-section-id="education-header"
              >
                Education
              </h3>
              {renderEditButtons('education-header')}
            </div>
            <div className="section-wrapper">
              <p 
                style={getSectionStyle('education-years')}
                data-section-id="education-years"
              >
                <strong>2014 - 2017</strong>
              </p>
              {renderEditButtons('education-years')}
            </div>
            <div className="section-wrapper">
              <p 
                style={getSectionStyle('education-school')}
                data-section-id="education-school"
              >
                Technical College of Požarevac - Nikola Tesla
              </p>
              {renderEditButtons('education-school')}
            </div>
          </div>
        );

      case 'references':
        return (
          <div 
            className="references card" 
            style={getSectionStyle('references')}
            onClick={() => handleSectionClick('references')}
          >
            <div className="section-wrapper">
              <h3 
                style={getSectionStyle('references-header')}
                data-section-id="references-header"
              >
                References
              </h3>
              {renderEditButtons('references-header')}
            </div>
            <div className="section-wrapper">
              <p 
                style={getSectionStyle('references-text')}
                data-section-id="references-text"
              >
                Available upon request.
              </p>
              {renderEditButtons('references-text')}
            </div>
          </div>
        );

      default:
        // Render custom cards
        if (cardId.startsWith('custom-card-')) {
          const cardHeaderId = `${cardId}-header`;
          const cardTextId = `${cardId}-text`;
          
          return (
            <div 
              className="custom card" 
              style={getSectionStyle(cardId)}
              onClick={() => handleSectionClick(cardId)}
            >
              <div className="section-wrapper">
                <h3 
                  style={getSectionStyle(cardHeaderId)}
                  data-section-id={cardHeaderId}
                >
                  New Section
                </h3>
                {renderEditButtons(cardHeaderId)}
              </div>
              <div className="section-wrapper">
                <p 
                  style={getSectionStyle(cardTextId)}
                  data-section-id={cardTextId}
                >
                  Add your content here.
                </p>
                {renderEditButtons(cardTextId)}
              </div>
            </div>
          );
        }
        return null;
    }
  };

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <>
      <div id="cv-wrapper" className="cards">
        {cards.map(cardId => (
          <div key={cardId}>
            {renderCard(cardId)}
          </div>
        ))}
      </div>
      
      <button 
        onClick={addNewCard}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#4CAF50',
          color: 'white',
          margin: '1rem auto',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add New Card
      </button>
      
      {Object.keys(sectionStyles).length > 0 && (
        <div style={{ margin: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <h4>Section Styles:</h4>
          <pre>{JSON.stringify(sectionStyles, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default Cards;