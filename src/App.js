import React from 'react';
import './App.scss';
import Name from './components/Name'
import Menu from './components/Menu'
import Personaldetail from './components/Personaldetail'
import Experience from './components/Experience'
import Education from './components/Education'
import Skill from './components/Skill'
import Hobbies from './components/Hobbies'
import Portfolio from './components/Portfolio'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Name />
        <Switch>
          <Route path="/templates">

          </Route>
          <Route path="/">
            <Menu />
            <Personaldetail />
            <Experience />
            <Education />
            <Skill />
            <Hobbies />
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
