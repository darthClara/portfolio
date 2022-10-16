import React from 'react';
import './App.scss';
import Nav from './components/nav/Nav';
import Jedi from './components/jedi/Jedi';
import Scrollbar from './components/scrollsound/Scrollsound';
import Navbar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';

export default function App() {
    return (
        <div className="appWrapper">
            <Router>
                <Nav />
                <Jedi />
                <Scrollbar />
                <Navbar />
                <Routes>
                    <Route path="./Pagina1" exact component={<Pagina1/>} />
                    <Route path="/Pagina2" component={<Pagina2/>} />
                    <Route path="/Pagina3" component={<Pagina3/>} />
                </Routes>
            </Router>
        </div>
    );
}
