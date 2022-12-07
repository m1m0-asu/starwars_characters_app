import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [users, setUsers] = useState([])

  useEffect (() => {
    console.log('useeffect run')
    fetch('/people')
      .then(res => res.json())
      .then(users => setUsers(users))
  },[]);

  return (
    <div className="App">
      <h1>Users</h1>
      {users.map(user =>
        <div key={user.id}>{user.username}</div>
      )}
    </div>
  );
}

export default App;
