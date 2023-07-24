import React from 'react'
import logo from '../images/logo.png';
import SearchBar from './Searchbar';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';



// Sample list of Overwatch heroes
const allHeroes = [
  'Ana', 'Ashe', 'Baptiste', 'Bastion', 'Brigitte', 'Cassidy', 'Dva','Doomfist',
  'Echo', 'Genji', 'Hanzo', 'Junker Queen', 'Junkrat', 'Kiriko', 'Lucio', 'Mei', 
  'Mercy', 'Moira', 'Orisa', 'Pharah', 'Ramattra', 'Reaper', 'Reinhardt', 'Roadhog',
  'Sigma', 'Sojourn', 'Soldier:76', 'Sombra', 'Symmetra', 'Torbjorn', 'Tracer', 'Widowmaker',
  'Winston', 'Wrecking Ball', 'Zarya', 'Zenyatta'
];

function header() {
  return (
    <div>
      <div className='Header'>
      <Link to='/'>
      <img src={logo} className="logoImage" alt="logoImage" />
      <h1 className='headerText'>Overwatch 2 Hero Helper</h1>
      </Link>
        <div className='HeaderSearchBar'>
          <SearchIcon />
          <SearchBar heroes={allHeroes} />
        </div>
      </div>
    </div>
  );
};

export default header
