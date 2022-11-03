import React from 'react';
import countries from './country-data.json';
import { CountryList } from './components/CountryList';
import { ICountry } from './types';



const App = () => {
  const transformCountries: ICountry[] = countries.map(country => {
    return {
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      area: country.area,
      region: country.region,
      flag: country.flags.svg,
    }
  }
  )
  return (
    <div className="container">
      <h1 className='p-5'>Country List</h1>
      <CountryList countries={transformCountries} />
    </div>
  );
}

export default App;
