import './App.css';
import Person from './components/person';
import Navbar from './components/navbar';
import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect, useState} from 'react';

function App() {

  const [people, setPeople] = useState([]);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
  const [showLinearProgressOnLoad, setShowLinearProgressOnLoad] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);

  function loadMaleCharacters() {
    setShowLoadMoreButton(false)
    setShowSpinner(true)
    fetch('/people/male')
      .then(res => res.json())
      .then(peeps => {
        setPeople([...people, ...peeps])
        setShowSpinner(false)
      })
  }

  useEffect (() => {
    let ignore = false;
    fetch('/people/female')
      .then(res => res.json())
      .then(people => {
        if (!ignore) {
          setPeople(people)
          setShowLinearProgressOnLoad(false)
          setShowLoadMoreButton(true)
          console.log('ayyy')
        }
      })

    return () => { ignore = true }
  },[]);

  return (
    <div className="App">
      <Navbar />
      { showLinearProgressOnLoad ? (<LinearProgress color='inherit' style={{color: 'gold'}}/>) : "" }
      <div className='container'>
        <div className='row'>
          {people.map(peep => 
            <Person person={peep}/>
          )}
        </div>
      </div>
      { showLoadMoreButton ? (<button onClick={loadMaleCharacters} id="load-button" className="btn btn-light">Load first five male characters</button>) : "" }
      { showSpinner ? 
        (<div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>) : ""
        }
    </div>
  );
}

export default App;
