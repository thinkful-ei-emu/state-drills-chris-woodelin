import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/bomb'
import RouletteGun from './state-drills/RouletteGun'

ReactDOM.render(<RouletteGun bulletInChamber={5} />, document.getElementById('root'));
