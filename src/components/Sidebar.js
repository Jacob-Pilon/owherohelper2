import React from 'react';
import '../App.css';
import {sidebarItems} from './sidebarItems'
import { useNavigate } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';


function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {sidebarItems.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                navigate(val.link);
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;


