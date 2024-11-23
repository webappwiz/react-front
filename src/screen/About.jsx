import React from 'react';
import './About.css';
import webappwiz1 from '../assets/wabappwiz1.png';
import { Link } from 'react-router-dom';

import hirea from '../assets/hirea.jpg';

function About() {
  return (
    <div className="about">
      <div className="major">
        {/* About Picture */}
        <div className="aboutpic">
          <img src={webappwiz1} alt="webappwiz" className="mypicture" />
        </div>

        {/* About Description */}
        <div className="meintro">
          <h2>About Me</h2>
          <h6>We Always Make The Best</h6>
          
          <p>I am Solomon, also known as Webappwiz, a skilled web <hr /> and mobile app developer and consultant 
           from Delta <hr /> State, Nigeria. I specialize in creating innovative and<hr /> user-friendly
         applications that meet  client <hr />expectations and drive success.</p>
      
         {/* For specific screen display  */}
          <pre className='more'>
            I am Solomon, also known as Webappwiz,<hr />
            a skilled web and mobile app developer<hr />
            and consultant from Delta State, Nigeria.<hr />
            I specialize in creating innovative and<hr />
            user-friendly applications that meet<hr />
            client expectations and drive success.
          </pre>

          
          <span className="contactus">
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </span>
        </div>
      </div>

      {/* Skills Section */}
    
    <div className="ratemajor">
      <div className="skills-container">
        <div className="skill">
          <div className="skill-label">
            <p>Node.js</p>
            <p>80%</p>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-label">
            <p>React</p>
            <p>85%</p>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-label">
            <p>React Native</p>
            <p>75%</p>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-label">
            <p>JavaScript</p>
            <p>90%</p>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-label">
            <p>HTML & CSS</p>
            <p>95%</p>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: "95%" }}></div>
          </div>
        </div>
      </div>

      {/* Mark Section */}
      <div className="mark">
        <div className="mark-item">
          <h1>5</h1>
          <p>Years' Service</p>
        </div>
        <div className="mark-item">
          <h1>120+</h1>
          <p>Projects Done</p>
        </div>
        <div className="mark-item">
          <h1>95+</h1>
          <p>Satisfied Clients</p>
        </div>
      </div>
    </div>
       <div className='last'></div>   

         
    
</div>
  );
}

export default About;