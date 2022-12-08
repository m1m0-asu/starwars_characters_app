import './App.css';
import Person from './components/person';
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
      {people.map(peep => 
        <Person person={peep}/>
      )}
    </div>
  );
}

export default App;
