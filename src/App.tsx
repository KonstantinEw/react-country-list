
import countries from './country-data.json';
import { CountryList } from './components/CountryList';
import { ICountry } from './types';
import { transformCountries } from './mappers/transformCountries';



const App = () => {
  const transformCountryItems: ICountry[] = transformCountries(countries)
  return (
    <div className="container">
      <h1 className='p-5'>Country List</h1>
      <CountryList countries={transformCountryItems} />
    </div>
  );
}

export default App;
