import React, { useState } from 'react'
import AddTeamForm from '../../components/AddTeamForm';
import AddUserForm from '../../components/AddUserForm';

export default function ConfigurationPage() {

  const [teams, setTeam] = useState([])

  const addTeam = (value) => {
    setTeam([...teams, { value, label: value }]);
  };

  return (
    <>
      <AddUserForm teams={teams}  />
      <AddTeamForm addTeam={addTeam}/>
    </>
  )
}
