import { useState } from 'react';
import './App.scss';
import ResultPage from '../result-page/ResultPage';
import SearchPage from '../search-page/SearchPage';
import LocationContext from '../utils/LocationContext';

function App() {
  const locationHook = useState({
    latitude: '39.0481',
    longitude: '-77.4728',
    city: 'Ashburn',
  });
  return (
    <div className='App'>
      <LocationContext.Provider value={locationHook}>
        <ResultPage />
        <SearchPage />
      </LocationContext.Provider>
    </div>
  );
}

export default App;
