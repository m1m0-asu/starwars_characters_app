import './App.css';
import Person from './components/person';
import Navbar from './components/navbar';
import React, {useEffect, useState} from 'react';

function App() {

  const [people, setPeople] = useState([])

  useEffect (() => {
    console.log('useeffect run')
    fetch('/people/female')
      .then(res => res.json())
      .then(people => setPeople(people))
  },[people.length]);

  return (
    <div className="App">
      <Navbar />
      <h1>People</h1>
      {people.map(peep => 
        <Person person={peep}/>
      )}
    </div>
  );
}

export default App;
