import React from 'react'
import Doomfist from '../images/doomfist.png';
import Dva from '../images/dva.png';
import Orisa from '../images/orisa.png';
import Reaper from '../images/reaper.png';
import Cassidy from '../images/mcree.png';
import Junkrat from '../images/junkrat.png';
import Ana from '../images/ana.png';
import Zenyatta from '../images/zenyatta.png';
import Mercy from '../images/mercy.png';
import { Link } from 'react-router-dom';


function ourCoaches() {
  return (
    <div>
    <div class="titleSectionPages">
            <h1>Our Coaches</h1>
        </div>
    <div class="contentMainPages">
        <div className='ourCoaches'>
            <div className='container'>
                <div class="title">
                    <h1>Tanks</h1>
                </div>
                <div class="image-wrapper">
                    <img src={Doomfist} alt="Image 1" />
                    <img src={Dva} alt="Image 2" />
                    <img src={Orisa} alt="Image 3" />
                </div>
                <div class="paragraph">
                    <p>Our expert coaches will guide you in perfect positioning, creating space, and mastering communication. Improve game sense, target prioritization, and ultimate usage. Dominate as Reinhardt, Winston, Orisa, D.Va, and more. Unleash your full potential and become an unstoppable force on the battlefield! Join us now and elevate your tanking prowess.</p>
                </div>
            </div>
        <div className='container'>
        <div class="title">
            <h1>Damage</h1>
        </div>
        <div class="image-wrapper">
                <img src={Reaper} alt="Image 1" />
                <img src={Cassidy} alt="Image 2" />
                <img src={Junkrat} alt="Image 3" />
        </div>
        <div class="paragraph">
            <p>Our skilled coaches will take your gameplay to the next level. Learn the art of precision aiming, perfect positioning, and devastating combos. Enhance your game sense, target prioritization, and ultimate management. Master heroes like Widowmaker, Genji, Tracer, and more. Unleash your full potential as a DPS powerhouse and carry your team to victory. Join us now and become a force to be reckoned with on the battlefield!</p>
        </div>
        </div>
        <div className='container'>
        <div class="title">
            <h1>Supports</h1>
        </div>
        <div class="image-wrapper">
                <img src={Ana} alt="Image 1" />
                <img src={Zenyatta} alt="Image 2" />
                <img src={Mercy} alt="Image 3" />
        </div>
        <div class="paragraph">
            <p>Our expert coaches are here to elevate your support gameplay. Learn the art of efficient healing, strategic positioning, and game-changing ability usage. Enhance your game sense, target prioritization, and shot-calling skills. Master heroes like Ana, Mercy, Moira, and Lucio. Unleash your full potential as a support maestro and provide the crucial backbone for your team's success. Join us now and become an indispensable asset to your squad!</p>
        </div>
        </div>
    </div>
  </div>
    <div class="button-container">
    <Link to="/booknow" className="button-link">
        Book a coaching session now!
    </Link>

    </div>


  </div>
  )
}

export default ourCoaches
