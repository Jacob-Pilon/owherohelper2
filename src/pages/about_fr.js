import React from 'react';
import Mainlogo from '../images/MainLogo.png';
import { Link } from 'react-router-dom';

function aboutUs_fr() {
  return (
  <div>
    <div className="titleSectionPages">
      <h1>Selon Nous</h1>
    </div>
    
    <div className="contentMainPages">
      <img src={Mainlogo} className="MainLogo" alt="MainLogo"></img>
      <p>Bienvenue dans Overwatch 2 Hero Helper, votre destination ultime pour atteindre de nouveaux sommets dans le monde compétitif d'Overwatch 2 ! Notre mission première est de vous guider vers le plus haut rang possible grâce à nos méthodes de coaching exceptionnelles. Que vous soyez un joueur chevronné cherchant à affiner vos compétences ou un nouveau venu à la recherche de conseils d'experts, nous avons ce qu'il vous faut. Notre équipe dévouée d'entraîneurs qualifiés est là pour analyser votre gameplay, fournir des informations précieuses et élaborer des stratégies personnalisées pour libérer votre plein potentiel. Rejoignez-nous dans ce voyage exaltant pour maîtriser vos héros préférés et dominer le champ de bataille. Ensemble, partons à la conquête d'Overwatch 2 et faisons votre marque parmi les meilleurs joueurs du jeu!</p>
    </div>
    <div className='Translate'><Link to="/about">English</Link> </div>
  </div>
  )
}

export default aboutUs_fr
