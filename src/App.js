import React from 'react';
import './App.scss';
import Nav from './components/nav/Nav';
import Jedi from './components/jedi/Jedi';

export default function App() {
  return (
    <div className="appWrapper">
        <Nav/>
        <Jedi/>
    </div>
  );
}
