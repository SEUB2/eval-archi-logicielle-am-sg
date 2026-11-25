// Users.js (view)
import React from 'react';

const Teams = ({ teams }) => {
  return (
    <div>
      <h1>Team List</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            {team.id} - {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;