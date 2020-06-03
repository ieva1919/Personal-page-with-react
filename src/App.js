import React from 'react';
import './App.css';
import Name from './components/Name'
import Menu from './components/Menu'
import BoxHeader from './components/BoxHeader'

function App() {
  return (
    <div className="App">
      <Name />
      <Menu />
      <BoxHeader title="WHO AM I?" container="Personal details" />
    </div>
  );
}

export default App;
