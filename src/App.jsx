import React from 'react';
import './App.css';
import ListMusic from './components/ListMusic.jsx';
import SearchMusic from './components/SearchMusic.jsx';

const App = () =>
  <div className="container">
    <SearchMusic />
    <ListMusic />
  </div>;

export default App;
