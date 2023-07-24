import React from 'react'
import Mainlogo from '../images/MainLogo.png';
import SearchBar from './Searchbar';





const Main = () => {
  // Sample list of Overwatch heroes
  const allHeroes = [
    'Ana', 'Ashe', 'Baptiste', 'Bastion', 'Brigitte', 'Cassidy', 'Dva','Doomfist',
    'Echo', 'Genji', 'Hanzo', 'Junker Queen', 'Junkrat', 'Kiriko', 'Lucio', 'Mei', 
    'Mercy', 'Moira', 'Orisa', 'Pharah', 'Ramattra', 'Reaper', 'Reinhardt', 'Roadhog',
    'Sigma', 'Sojourn', 'Soldier:76', 'Sombra', 'Symmetra', 'Torbjorn', 'Tracer', 'Widowmaker',
    'Winston', 'Wrecking Ball', 'Zarya', 'Zenyatta'
  ];


  return (
    <div className='main'>
      <img src={Mainlogo} className="MainLogo" alt="MainLogo"></img>
      <h1> Overwatch 2 Hero Helper  </h1>
      <div>
        <SearchBar heroes={allHeroes} />
            
      </div>
    </div>
  )
}


export default Main;
