import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/about.js'; // Import your About element
import AboutUsfr from '../pages/about_fr.js'; // Import your About element
import Coaches from '../pages/ourCoaches.js';
import BookNow from '../pages/bookNow.js';
import BookConfirm from './BookingConfirmedPage.js'
import Tierlist from '../pages/tierList.js';
import Main from './Main.js';
import Ana from '../heroes/Ana.js';
import Ashe from '../heroes/Ashe.js';
import Baptiste from '../heroes/Baptiste.js';
import Bastion from '../heroes/Bastion.js';
import Brigitte from '../heroes/Brigitte.js';
import Cassidy from '../heroes/Cassidy.js';
import Dva from '../heroes/Dva.js';
import Doomfist from '../heroes/Doomfist.js';
import Echo from '../heroes/Echo.js';
import Genji from '../heroes/Genji.js';
import Hanzo from '../heroes/Hanzo.js';
import JunkerQueen from '../heroes/Junker Queen.js';
import Junkrat from '../heroes/Junkrat.js';
import Kiriko from '../heroes/Kiriko.js';
import Lucio from '../heroes/Lucio.js';
import Mei from '../heroes/Mei.js';
import Mercy from '../heroes/Mercy.js';
import Moira from '../heroes/Moira.js';
import Orisa from '../heroes/Orisa.js';
import Pharah from '../heroes/Pharah.js';
import Ramattra from '../heroes/Ramattra.js';
import Reaper from '../heroes/Reaper.js';
import Reinhardt from '../heroes/Reinhardt.js';
import Roadhog from '../heroes/Roadhog.js';
import Sigma from '../heroes/Sigma.js';
import Sojourn from '../heroes/Sojourn.js';
import Soldier76 from '../heroes/Soldier76.js';
import Sombra from '../heroes/Sombra.js';
import Symmetra from '../heroes/Symmetra.js';
import Torbjorn from '../heroes/Torbjorn.js';
import Tracer from '../heroes/Tracer.js';
import Widowmaker from '../heroes/Widowmaker.js';
import Winston from '../heroes/Winston.js';
import WreckingBall from '../heroes/Wrecking Ball.js';
import Zarya from '../heroes/Zarya.js';
import Zenyatta from '../heroes/Zenyatta.js';


const AppRoutes = () => {
  return (
    <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/owherohelper2" element={<Main />} />
                <Route exact path="/about" element={<AboutUs />} />
                <Route exact path="/about_fr" element={<AboutUsfr />} />
                <Route exact path="/tierlist" element={<Tierlist />} />
                <Route exact path="/coaches" element={<Coaches />} />
                <Route exact path="/booknow" element={<BookNow />} />
                <Route exact path="/bookingconfirm" element={<BookConfirm />} />



                <Route exact path="/Ana" element={<Ana />} />
                <Route exact path="/Ashe" element={<Ashe />} />
                <Route exact path="/Baptiste" element={<Baptiste />} />
                <Route exact path="/Bastion" element={<Bastion />} />
                <Route exact path="/Brigitte" element={<Brigitte />} />
                <Route exact path="/Cassidy" element={<Cassidy />} />
                <Route exact path="/Dva" element={<Dva />} />
                <Route exact path="/Doomfist" element={<Doomfist />} />
                <Route exact path="/Echo" element={<Echo />} />
                <Route exact path="/Genji" element={<Genji />} />
                <Route exact path="/Hanzo" element={<Hanzo />} />
                <Route exact path="/Junker Queen" element={<JunkerQueen />} />
                <Route exact path="/Junkrat" element={<Junkrat />} />
                <Route exact path="/Kiriko" element={<Kiriko />} />
                <Route exact path="/Lucio" element={<Lucio />} />
                <Route exact path="/Mei" element={<Mei />} />
                <Route exact path="/Mercy" element={<Mercy />} />
                <Route exact path="/Moira" element={<Moira />} />
                <Route exact path="/Orisa" element={<Orisa />} />
                <Route exact path="/Pharah" element={<Pharah />} />
                <Route exact path="/Ramattra" element={<Ramattra />} />
                <Route exact path="/Reaper" element={<Reaper />} />
                <Route exact path="/Reinhardt" element={<Reinhardt />} />
                <Route exact path="/Roadhog" element={<Roadhog />} />
                <Route exact path="/Sigma" element={<Sigma />} />
                <Route exact path="/Sojourn" element={<Sojourn />} />
                <Route exact path="/Soldier76" element={<Soldier76 />} />
                <Route exact path="/Sombra" element={<Sombra />} />
                <Route exact path="/Symmetra" element={<Symmetra />} />
                <Route exact path="/Torbjorn" element={<Torbjorn />} />
                <Route exact path="/Tracer" element={<Tracer />} />
                <Route exact path="/Widowmaker" element={<Widowmaker />} />
                <Route exact path="/Winston" element={<Winston />} />
                <Route exact path="/Wrecking Ball" element={<WreckingBall />} />
                <Route exact path="/Zarya" element={<Zarya />} />
                <Route exact path="/Zenyatta" element={<Zenyatta />} />

        </Routes>
  );
};

export default AppRoutes;
