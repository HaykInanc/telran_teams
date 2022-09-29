import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Nav from '../Nav';
import ConfigurationPage from '../../pages/ConfigurationPage';
import TeamsPage from '../../pages/TeamsPage';
import { Context } from '../../context'

function App() {
  const [users, setUser] = useState([]);

  const addUser = (name, team) => {
    setUser([...users, {
      id: Date.now(),
      name, team
    }]);
  }

  const deleteUser = (id) => {
    setUser([...users.filter(user => user.id !== id)]);
  }
  

  return (
    <Context.Provider value={{addUser, deleteUser}}>
      <Nav />
      <Routes>
        <Route path='/configuration' element={<ConfigurationPage/> } />
        <Route path='/team' element={<TeamsPage users={users}/>} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
