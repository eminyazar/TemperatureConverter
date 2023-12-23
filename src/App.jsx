import { useState } from 'react'
import './App.css'
import LinkedinLink from './components/LinkedinLink';

function App() {

  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState(null);
  const [kelvin, setKelvin] = useState(null);

  const convertTemperature = () => {
    
    const f = (celsius * 9/5) + 32;
    const k = celsius + 273.15;
    
    setFahrenheit(f.toFixed(2));
    setKelvin(k.toFixed(2));
  };

  return (
    <>
      <div className='container'>
        <h1>Temperature Converter</h1>
        <label htmlFor="celsius">Celsius:</label>
        <input
          type="number"
          id="celsius"
          placeholder='Enter Celsius'
          value={celsius}
          onChange={(e) => setCelsius(parseFloat(e.target.value))}
        />
        <button onClick={convertTemperature}>Convert</button>
        <div id='result'>
          {fahrenheit && <p>Fahrenheit: {fahrenheit}</p>}
          {kelvin && <p>Kelvin: {kelvin}</p>}
        </div>  
      </div>
      <hr />
      <div className='linkedin-box'>
        <LinkedinLink />
      </div>
    </>
  )
}

export default App
