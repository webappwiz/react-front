import React from 'react';
import './Home.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import webappwiz1 from '../assets/wabappwiz1.png';
import { Link } from 'react-router-dom';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      {/* Navigation Menu */}
      <div className="homedead">
        <nav className="home-nav">
          <ul className="home-menu">
            <li className="dropdown">
              Mobile
              <ul className="dropdown-menu">
                <li>App Development</li>
                <li>Responsive Design</li>
                <li>Testing & Deployment</li>
              </ul>
            </li>
            <li className="dropdown">
              Web
              <ul className="dropdown-menu">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Full-stack Solutions</li>
              </ul>
            </li>
            <li className="dropdown">
              Graphics
              <ul className="dropdown-menu">
                <li>Logo Design</li>
                <li>Branding</li>
                <li>UI/UX Design</li>
              </ul>
            </li>
            <li className="dropdown">
              Technology
              <ul className="dropdown-menu">
                <li>Node.js</li>
                <li>React</li>
                <li>React Native</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={pic1} alt="Slide 1" className="carousel-image" />
          </div>
          <div>
            <img src={pic2} alt="Slide 2" className="carousel-image" />
          </div>
          <div>
            <img src={pic3} alt="Slide 3" className="carousel-image" />
          </div>
          <div>
            <img src={pic4} alt="Slide 4" className="carousel-image" />
          </div>
        </Slider>
      </div>

      {/* Intro Section */}
      <div className="intro-container">
        <span className="textspan">
          <p>Hi There!</p>
          <h6 className="introp">I am a Developer</h6>
          <p>I make the complex simple</p>
          <span className="contactme">
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </span>
        </span>
        <span className="picspan">
          <img src={webappwiz1} alt="webappwiz" className="myimg" />
        </span>
      </div>

      {/* Services Section */}
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">Web Development</div>
          <div className="service-card">Mobile Development</div>
          <div className="service-card">UI/UX Design</div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"The best development team I've ever worked with!"</p>
        </div>
        <div className="testimonial">
          <p>"They turned my ideas into reality. Highly recommended!"</p>
        </div>
      </div>
    </div>
  );
}

export default Home;