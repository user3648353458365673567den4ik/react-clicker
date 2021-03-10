import React, {useState} from 'react'
import './App.css';
import Clicker from './components/Clicker';
import Results from './components/Results';

function App() {
  let [counter, setCounter] = useState(0)
  let [results, setResults] = useState([])


  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    if (counter > 0)  { 
      setCounter(counter - 1)
    } else { 
      setCounter(0) 
    }
  }

  function save() {
    if (counter !== 0) {
      setResults(results.concat(counter))
      setCounter(0)

      console.log("Данные сохранены успешно ;)");
    }
  }

  function clear() {
    setCounter(0)
  }

  return (
    <div className="App">
      <Clicker counter={counter} increment={increment} save={save} clear={clear} decrement={decrement} />

      { results ? ( 
        <Results results={results} /> 
      ) 
      : 
      (
        // eslint-disable-next-line
         <h1></h1> 
         
      ) }
      
    </div>
  );
}

export default App;
