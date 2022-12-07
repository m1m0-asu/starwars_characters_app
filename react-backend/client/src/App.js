import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [people, setPeople] = useState([])

  useEffect (() => {
    console.log('useeffect run')
    fetch('/people')
      .then(res => res.json())
      .then(people => setPeople(people))
  },[]);

  return (
    <div className="App">
      <h1>People</h1>
      {people.map(peep => <div>
        <div key={peep.name}>{peep.name}</div>
        <div key={peep.gender}>{peep.gender}</div>
        </div>
      )}
    </div>
  );
}

export default App;
