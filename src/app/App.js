import { useState } from 'react';
import ResultPage from '../result-page/ResultPage';
import SearchPage from '../search-page/SearchPage';
import LocationContext from '../utils/LocationContext';
import SuggestedLocContext from '../utils/SuggestedLocContext';
import WeatherContext from '../utils/WeatherContext';

import './App.scss';
import Background from '../background/Background';

const App = () => {
  const locationHook = useState({
    latitude: '39.0481',
    longitude: '-77.4728',
    city: 'Ashburn',
  });

  const suggestedLocHook = useState({ locationSuggestion: [] });

  const weatherHook = useState({
    currentWeather: '',
  });

  /**
   clouds: 1,
   dew_point: -1.69,
   dt: 1619250967,
   feels_like: 2.82,
   humidity: 65,
   pressure: 1018,
   sunrise: 1619259609,
   sunset: 1619308528,
   temp: 16.07,
   uvi: 0,
   visibility: 10000,
   weather: [
     {
       id: 500,
       main: 'Rain',
       description: 'light rain',
       icon: '10d',
     },
   ],
   rain: {
     '1h': 0.21,
   },
   wind_deg: 281,
   wind_gust: 1.56,
   wind_speed: 1.55,
   
   * 11°C
Feels like 10°C. Few clouds. Gentle Breeze
 5.1m/s E
1029hPa
Humidity:
71%
UV:
2
Dew point:
6°C
Visibility:
10.0km
   */

  return (
    <div className='App'>
      <LocationContext.Provider value={locationHook}>
        <SuggestedLocContext.Provider value={suggestedLocHook}>
          <WeatherContext.Provider value={weatherHook}>
            <Background />
            <ResultPage />
            <SearchPage />
          </WeatherContext.Provider>
        </SuggestedLocContext.Provider>
      </LocationContext.Provider>
    </div>
  );
};

export default App;
