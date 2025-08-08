import { useState } from "react";

function Cards({ settings }) {
     if (!settings) return null;
  const { color, fontSize, fontFamily, includePhoto = false , showEditButtons = true} = settings;
  const [selectedSection, setSelectedSection] = useState(null);
  
  const cardStyle = {
    backgroundColor: color,
    fontFamily: fontFamily,
  };

  const renderEditButtons = (sectionId) => {
    if (showEditButtons === false) return null;
    
    return selectedSection === sectionId ? (
      <div className="card-buttons-wrapper">
        <button className="card-buttons">Font Size</button>
        <input 
          type="color" 
          className="color-picker-input" 
          defaultValue="#ffffff"
          style={{
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            marginLeft: '0.5rem',
            verticalAlign: 'middle',
          }}
        />
        <button className="card-buttons">Edit</button>
        <button className="card-buttons">Delete Line</button>
        <button className="card-buttons">Delete Div</button>
      </div>
    ) : null;
  };

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <>
      <div className="cards">
        <div className="name-and-photo card" style={cardStyle}>
          <div 
            className="photo" 
            style={{ display: "flex" }}
            onClick={() => handleSectionClick('name-and-photo')}
          >
            {includePhoto && <img src="https://via.placeholder.com/150" alt="Profile" className="profile-photo" />}
            <div className="section-wrapper">
              <h2>Nikola Babić</h2>
              {renderEditButtons('name-header')}
            </div>
          </div>
          <div 
            className="section-wrapper"
            onClick={() => handleSectionClick('title-section')}
          >
            <p>Frontend Developer | React Enthusiast</p>
            {renderEditButtons('title-section')}
          </div>
        </div>

        <div 
          className="contact-info card" 
          style={cardStyle}
          onClick={() => handleSectionClick('contact-info')}
        >
          <div className="section-wrapper">
            <h3>Contact Information</h3>
            {renderEditButtons('contact-header')}
          </div>
          <div className="section-wrapper">
            <p><strong>Email:</strong> <a href="mailto:nikola94.babic@gmail.com">nikola94.babic@gmail.com</a></p>
            {renderEditButtons('contact-email')}
          </div>
          <div className="section-wrapper">
            <p><strong>Phone:</strong> <a href="tel:+381695255021">+381 69 525 5021</a></p>
            {renderEditButtons('contact-phone')}
          </div>
          <div className="section-wrapper">
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nikola-babic-3639381a3" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/nikola-babic-3639381a3</a></p>
            {renderEditButtons('contact-linkedin')}
          </div>
        </div>

        <div 
          className="skills card" 
          style={cardStyle}
          onClick={() => handleSectionClick('skills')}
        >
          <div className="section-wrapper">
            <h3>Technical Skills</h3>
            {renderEditButtons('skills-header')}
          </div>
          <ul>
            <div className="section-wrapper">
              <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, jQuery</li>
              {renderEditButtons('skills-frontend')}
            </div>
            <div className="section-wrapper">
              <li><strong>Testing:</strong> Jest</li>
              {renderEditButtons('skills-testing')}
            </div>
            <div className="section-wrapper">
              <li><strong>Version Control:</strong> Git</li>
              {renderEditButtons('skills-version-control')}
            </div>
            <div className="section-wrapper">
              <li><strong>Currently Learning:</strong> Node.js, Tailwind, SaaS, TypeScript</li>
              {renderEditButtons('skills-learning')}
            </div>
          </ul>
        </div>

        <div 
          className="experience card" 
          style={cardStyle}
          onClick={() => handleSectionClick('experience')}
        >
          <div className="section-wrapper">
            <h3>Work Experience</h3>
            {renderEditButtons('experience-header')}
          </div>
          <div className="job-years">
            <div className="section-wrapper">
              <p><strong>2022 - 2023</strong></p>
              {renderEditButtons('experience-years1')}
            </div>
            <div className="section-wrapper">
              <p className="job-title">Motherson Sumi</p>
              {renderEditButtons('experience-title1')}
            </div>
            <ul>
              <div className="section-wrapper">
                <li>Rework Operator</li>
                {renderEditButtons('experience-detail1')}
              </div>
              <div className="section-wrapper">
                <li>Quality Assurance</li>
                {renderEditButtons('experience-detail2')}
              </div>
            </ul>
          </div>
          <div className="job-years">
            <div className="section-wrapper">
              <p><strong>2018 - 2021 & 2023-2024</strong></p>
              {renderEditButtons('experience-years2')}
            </div>
            <div className="section-wrapper">
              <p className="job-title">Freelance Coaching</p>
              {renderEditButtons('experience-title2')}
            </div>
            <ul>
              <div className="section-wrapper">
                <li>Provided individual coaching for video game League of Legends</li>
                {renderEditButtons('experience-detail3')}
              </div>
              <div className="section-wrapper">
                <li>Created algorithms for game strategy optimization</li>
                {renderEditButtons('experience-detail4')}
              </div>
              <div className="section-wrapper">
                <li>Coaching provided to players of various skill levels and nationalities</li>
                {renderEditButtons('experience-detail5')}
              </div>
            </ul>
          </div>
        </div>

        <div 
          className="education card" 
          style={cardStyle}
          onClick={() => handleSectionClick('education')}
        >
          <div className="section-wrapper">
            <h3>Education</h3>
            {renderEditButtons('education-header')}
          </div>
          <div className="section-wrapper">
            <p><strong>2014 - 2017</strong></p>
            {renderEditButtons('education-years')}
          </div>
          <div className="section-wrapper">
            <p>Technical College of Požarevac - Nikola Tesla</p>
            {renderEditButtons('education-school')}
          </div>
        </div>

        <div 
          className="references card" 
          style={cardStyle}
          onClick={() => handleSectionClick('references')}
        >
          <div className="section-wrapper">
            <h3>References</h3>
            {renderEditButtons('references-header')}
          </div>
          <div className="section-wrapper">
            <p>Available upon request.</p>
            {renderEditButtons('references-text')}
          </div>
        </div>
      </div>
      <button style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000ff',
        margin: '1rem auto'
      }}>
        Add Card
      </button>
    </>
  );
}

export default Cards;