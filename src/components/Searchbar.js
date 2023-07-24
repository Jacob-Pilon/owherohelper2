import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ana from '../SearchImages/ana.png';
import ashe from '../SearchImages/ashe.png';
import baptiste from '../SearchImages/baptiste.png';
import bastion from '../SearchImages/bastion.png';
import brigitte from '../SearchImages/brigitte.png';
import cassidy from '../SearchImages/mcree.png';
import dva from '../SearchImages/dva.png';
import doomfist from '../SearchImages/doomfist.png';
import echo from '../SearchImages/echo.png';
import genji from '../SearchImages/genji.png';
import hanzo from '../SearchImages/hanzo.png';
import junkerqueen from '../SearchImages/junkerqueen.png';
import junkrat from '../SearchImages/junkrat.png';
import kiriko from '../SearchImages/kiriko.png';
import lucio from '../SearchImages/lucio.png';
import mei from '../SearchImages/mei.png';
import mercy from '../SearchImages/mercy.png';
import moira from '../SearchImages/moira.png';
import orisa from '../SearchImages/orisa.png';
import pharah from '../SearchImages/pharah.png';
import ramattra from '../SearchImages/ramattra.png';
import reaper from '../SearchImages/reaper.png';
import reinhardt from '../SearchImages/reinhardt.png';
import roadhog from '../SearchImages/roadhog.png';
import sigma from '../SearchImages/sigma.png';
import sojourn from '../SearchImages/sojourn.png';
import soldier76 from '../SearchImages/soldier76.png';
import sombra from '../SearchImages/sombra.png';
import symmetra from '../SearchImages/symmetra.png';
import torbjorn from '../SearchImages/torbjorn.png';
import tracer from '../SearchImages/tracer.png';
import widowmaker from '../SearchImages/widowmaker.png';
import winston from '../SearchImages/winston.png';
import wreckingball from '../SearchImages/wreckingball.png';
import zarya from '../SearchImages/zarya.png';
import zenyatta from '../SearchImages/zenyatta.png';


const heroes = [
  { name: 'Ana', imageUrl: ana },
  { name: 'Ashe', imageUrl: ashe },
  { name: 'Baptiste', imageUrl: baptiste },
  { name: 'Bastion', imageUrl: bastion },
  { name: 'Brigitte', imageUrl: brigitte },
  { name: 'Cassidy', imageUrl: cassidy },
  { name: 'Dva', imageUrl: dva },
  { name: 'Doomfist', imageUrl: doomfist },
  { name: 'Echo', imageUrl: echo },
  { name: 'Genji', imageUrl: genji },
  { name: 'Hanzo', imageUrl: hanzo },
  { name: 'Junker Queen', imageUrl: junkerqueen },
  { name: 'Junkrat', imageUrl: junkrat },
  { name: 'Kiriko', imageUrl: kiriko },
  { name: 'Lucio', imageUrl: lucio },
  { name: 'Mei', imageUrl: mei },
  { name: 'Mercy', imageUrl: mercy},
  { name: 'Moira', imageUrl: moira },
  { name: 'Orisa', imageUrl: orisa },
  { name: 'Pharah', imageUrl: pharah },
  { name: 'Ramattra', imageUrl: ramattra },
  { name: 'Reaper', imageUrl: reaper },
  { name: 'Reinhardt', imageUrl: reinhardt },
  { name: 'Roadhog', imageUrl: roadhog },
  { name: 'Sigma', imageUrl: sigma },
  { name: 'Sojourn', imageUrl: sojourn },
  { name: 'Soldier:76', imageUrl: soldier76 },
  { name: 'Sombra', imageUrl: sombra },
  { name: 'Symmetra', imageUrl: symmetra },
  { name: 'Torbjorn', imageUrl: torbjorn },
  { name: 'Tracer', imageUrl: tracer },
  { name: 'Widowmaker', imageUrl: widowmaker },
  { name: 'Winston', imageUrl: winston },
  { name: 'Wrecking Ball', imageUrl: wreckingball },
  { name: 'Zarya', imageUrl: zarya },
  { name: 'Zenyatta', imageUrl: zenyatta }
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    setFilteredHeroes(
      value
        ? heroes.filter(
            (hero) =>
              hero.name &&
              hero.name.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const handleResultClick = (hero) => {
    setSearchTerm(hero.name);
    setFilteredHeroes([]);
    navigate(`/${hero.name}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for heroes..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {filteredHeroes.length > 0 && (
        <ul className="search-results">
          {filteredHeroes.map((hero) => (
            <li key={hero.name} onClick={() => handleResultClick(hero)}>
              <div className="search-result-item">
                {/* Use the actual image URL from the hero object */}
                <img src={hero.imageUrl} alt={hero.name} className="result-image" />
                <span className="result-text">{hero.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;