function Cards({settings }) {
    const {color, fontSize, fontFamily, includePhoto} = settings;
    const cardStyle = {
        backgroundColor: color,
        fontSize: fontSize,
        fontFamily: fontFamily,
    }



    return (
        <>
            <div className="cards">
                <div className='name-and-photo card' style={cardStyle}>
                    <h2>Nikola Babić</h2>
                    <p>Frontend Developer | React Enthusiast</p>
                    {includePhoto && <img src="https://via.placeholder.com/150" alt="Profile" className="profile-photo" />}
                </div>

                <div className='contact-info card' style={cardStyle}>
                    <h3>Contact Information</h3>
                    <p><strong>Email:</strong> <a href="mailto:nikola94.babic@gmail.com">nikola94.babic@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+381695255021">+381 69 525 5021</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nikola-babic-3639381a3" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/nikola-babic-3639381a3</a></p>
                </div>

                <div className='skills card' style={cardStyle}>
                    <h3>Technical Skills</h3>
                    <ul>
                        <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, jQuery</li>
                        <li><strong>Testing:</strong> Jest</li>
                        <li><strong>Version Control:</strong> Git</li>
                        <li><strong>Currently Learning:</strong> Node.js, Tailwind, SaaS, TypeScript</li>
                    </ul>
                </div>

                <div className='experience card' style={cardStyle}>
                    <h3>Work Experience</h3>
                    <div className='job-years'>
                        <p><strong>2022 - 2023</strong></p>
                        <p className='job-title'>Motherson Sumi</p>
                        <ul>
                            <li>Rework Operator</li>
                            <li>Quality Assurance</li>
                        </ul>
                    </div>
                    <div className='job-years'>
                        <p><strong>2018 - 2021 & 2023-2024</strong></p>
                        <p className='job-title'>Freelance Coaching</p>
                        <ul>
                            <li>Provided individual coaching for video game League of Legends</li>
                            <li>Created algorithms for game strategy optimization</li>
                            <li>Coaching provided to players of various skill levels and nationalities</li>
                        </ul>
                    </div>
                </div>

                <div className='education card' style={cardStyle}>
                    <h3>Education</h3>
                    <p><strong>2014 - 2017</strong></p>
                    <p>Technical College of Požarevac - Nikola Tesla</p>
                </div>

                <div className='references card' style={cardStyle}>
                    <h3>References</h3>
                    <p>Available upon request.</p>
                </div>
            </div>
            <button style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000000ff',
                margin: '1rem auto'
            }}>Add Card</button>
        </>
    );
}

export default Cards;