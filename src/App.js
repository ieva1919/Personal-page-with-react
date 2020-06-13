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

function App() {
  return (
    <div className="App">
      <Name />
      <Menu />
      <Personaldetail />
      <Experience />
      <Education />
      <Skill />
      <Hobbies />
      <Portfolio />
    </div>
  );
}

//     <Page>
//         <SideMenu />
//         <MainContent>
//             <PageHeader header="Users" />
//             <LoadingBar loading={loading} />
//             <DataTable date={users} />
//             <Pagination />
//         </MainContent>
//     </Page>

export default App;
