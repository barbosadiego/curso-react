import React, { useEffect, useState } from 'react';
import User from './components/User';
import './App.css'

const App = () => {
  //state
  const [users, setUsers] = useState(() => []);

  //effect
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((json) => {
        console.clear();
        console.log(json.users);
        setUsers(json.users);
      });
  }, []);

  return (
    <>
      <h1>Usuários inscritos</h1>
      <hr />
      {users.map((user) => (
        <User user={user} key={user.id}/>
      ))}
    </>
  );
};

export default App;
