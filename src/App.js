import React from 'react';
import './App.scss';
import Name from './components/Name'
import Menu from './components/Menu'
import Personaldetail from './components/Personaldetail'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return (
    <div className="App">
      <Name />
      <Menu />
      <Personaldetail />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
