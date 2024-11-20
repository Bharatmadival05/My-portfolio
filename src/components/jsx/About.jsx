import React, { useState } from 'react';
import user from '../assets/profile.png';

const Body = () => {
  const [activeTab, setActiveTab] = useState('language');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={user} alt="" />
          </div>
          <div className="about-col-2">
            <h1 className='sub-title'>About Me</h1>
            <p>
            Looking for an entry-level position in software development field
            where i can utilize my extensive knowledge about the area gained 
            during my Engineering degree in Computer Science. I have done many
            projects during my collage days and participated in competitive 
            coding and get certified in that program.
            </p>

            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'language' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('language')}
              >
                Programming & FrameWorks
              </p>
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('education')}
              >
                Education
              </p>
            </div>

            <div className={`tab-contents ${activeTab === 'language' ? 'active-tab' : ''}`} id='language'>
              <ul>
                <li>Java</li>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>SpringBoot Framework</li>
                <li>Angular Framework</li>
                <li>React JS</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id='skills'>
              <ul>
                <li><span>Web Development</span><br />Html, Css, Javascript</li>
                <li><span>Springboot Development</span><br />Springboot Application Development</li>
                <li><span>App Development</span><br />Andriod Application Development</li>
                <li><span>Java Development</span><br />Java Programming</li>
                <li><span>Sql</span><br />Sql Queries</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id='experience'>
              <ul>
                <li><span>Web Development</span><br />Web Development Training & Intern at Teachnook</li>
                <li><span>Java Full Stack Development</span><br />Intern at Techsreshta</li>
                <li><span>Java Programming</span><br />Q-spider Training</li>
                <li><span>Python Programming</span><br />Internshala</li>
                
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id='education'>
              <ul>
                <li><span>2020 - 2024</span><br />CSE at MIT, Kundapura</li>
                <li><span>2018 - 2020</span><br />PUC at Dr. A. V. Baliga Arts & Science Collage, Kumta</li>
                <li><span>2015 - 2018</span><br />HighSchool at S.R.H.S, Urkeri</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
