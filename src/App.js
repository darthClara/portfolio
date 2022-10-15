import React from 'react';
import './App.scss';
import Nav from './components/nav/Nav';
import Jedi from './components/jedi/Jedi';
import Scrollbar from './components/sabersound/Scrollbar';

export default function App() {
  return (
    <div className="appWrapper">
        <Nav/>
        <Jedi/>
        <Scrollbar/>
    </div>
  );
}
