import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import ListIcon from '@mui/icons-material/List';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export const sidebarItems = [
    {
        title:"Tier list",
        icon: <ListIcon />,
        link: "/tierlist"
    },
    {
        title:"Our Coaches",
        icon: <SupervisorAccountIcon />,
        link: "/coaches"
    },
    {
        title:"About Us",
        icon: <PsychologyAltIcon />,
        link: "/about"
    },
    {
        title:"Book Now",
        icon: <CalendarMonthIcon />,
        link: "/booknow"
    }
];
