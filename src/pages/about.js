import React from 'react';
import Mainlogo from '../images/MainLogo.png';
import { Link } from 'react-router-dom';

function aboutUs() {
  return (
  <div>
    <div className="titleSectionPages">
      <h1>About Us</h1>
      
    </div>
    
    <div className="contentMainPages">
      <img src={Mainlogo} className="MainLogo" alt="MainLogo"></img>
      <p>Welcome to Overwatch 2 Hero Helper, your ultimate destination to soar to new heights in the competitive world of Overwatch 2! Our primary mission is to guide you towards achieving the highest rank possible through our exceptional coaching methods. Whether you're a seasoned player looking to fine-tune your skills or a newcomer seeking expert guidance, we've got you covered. Our dedicated team of skilled coaches is here to analyze your gameplay, provide valuable insights, and craft personalized strategies to unlock your full potential. Join us on this exhilarating journey to master your favorite heroes and dominate the battlefield. Together, let's conquer Overwatch 2 and make your mark among the finest players in the game!</p>
    </div>
    <div className='Translate'><Link to="/about_fr">Français</Link> </div>
  </div>
  )
}

export default aboutUs
