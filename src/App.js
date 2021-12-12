import { useEffect, useState } from 'react';
import './App.css';
import AddedCountry from './Components/AddedCountry/AddedCountry';
import Country from './Components/Country/Country';

function App() {
  const [country, setCountry] = useState([]);
  const [addedCountry, setAddedCountry] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  }, [])

  const addCountryHandler = (country) => {
    const newCountry = [...addedCountry, country];
    setAddedCountry(newCountry);
  }

  return (
    <div className="App">
      <h3>Country Loaded: {country.length}</h3>
      <AddedCountry addedCountry={addedCountry}></AddedCountry>
        <div className="countries">
          {
            country.map(country => <Country addCountryHandler={addCountryHandler} key={country.name.common} country={country}></Country>)
          }
        </div>
    </div>
  );
}

export default App;