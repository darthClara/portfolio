import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarElements } from './SidebarElements';
import './Sidebar.scss';
import { IconContext } from 'react-icons';
import sidebarsound from "./sidebarsound.mp3";
import useSound from 'use-sound';
import sidebarsound2 from "./sidebarsound2.wav"
import click2 from "./click2.wav"
import closesound from "./sidebarclosesound.mp3"


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [play] = useSound(sidebarsound, { volume: 0.30 });
    const [play2] = useSound(click2, { volume: 0.30 });
    const [play3] = useSound(closesound, { volume: 0.80 });
    const [play4] = useSound(sidebarsound2, { volume: 0.80 });

    const [navbaropenbtn, setNavbaropenbtn] = useState(false);
    const overNavbaropenbtn = () => setNavbaropenbtn(!navbaropenbtn);
    const tochange = () => setNavbaropenbtn(!navbaropenbtn);

    const [menuicon, setMenuicon] = useState(false);
    const menuiconactive = () => setMenuicon(!menuicon);

    function gestoreClickopennav() {
        showSidebar();
        play();
    }

    function gestoreclickmouseenternav() {
        overNavbaropenbtn();
        menuiconactive();
        play4();
    }

    function gestoreleavenav() {
        tochange();
        menuiconactive();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={navbaropenbtn ? 'navbar active' : 'navbar'}>
                    <div className={navbaropenbtn ? 'scritta active' : 'scritta'}>APRI IL MENÙ</div>
                    <Link to='#' className='menulink'>
                        <FaIcons.FaGalacticRepublic className={menuicon ? 'menuicon active' : 'menuicon'} onMouseEnter={gestoreclickmouseenternav} onMouseLeave={gestoreleavenav} onClick={gestoreClickopennav} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <div className="sfondo">
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menulink' onClick={play3}>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {SidebarElements.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path} onMouseEnter={play2}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}
