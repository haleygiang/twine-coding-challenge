import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App () {
  const [states, setStates] = useState([]);

  useEffect(() => {
      axios.get('https://api.covidtracking.com/v1/states/current.json')

      .then(res => {
          console.log(res)
          setStates(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])

  states.sort((a,b) => b.total - a.total)

  return (
    <div className='app'>
      <p>List of US States and their Total Cases</p>
      <div className='covid-list'>
        {states.map((state) => (
          <div key={state.total} className="state-list">
            {state.state}: {state.total}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;