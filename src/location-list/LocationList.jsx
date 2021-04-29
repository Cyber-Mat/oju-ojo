import { useContext } from 'react';
import LocationContext from '../utils/LocationContext';
import { LocationSkeleton } from '../utils/Skeleton';
import SuggestedLocContext from '../utils/SuggestedLocContext';
import WeatherContext from '../utils/WeatherContext';
import './locationList.scss';

const LocationList = () => {
  const setLocation = useContext(LocationContext)[1];
  const [suggestedLoc] = useContext(SuggestedLocContext);
  const [weather, setWeather] = useContext(WeatherContext);
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const handleClick = e => {
    const locArr = e.target.textContent.split(',');
    setLocation({ city: locArr[0] });
    setWeather({ currentWeather: '' });
    const weatherURL2 = `https://api.openweathermap.org/data/2.5/weather?q=${locArr[0]}&units=metric&appid=${WEATHER_API_KEY}`;

    fetch(weatherURL2)
      .then(data => data.json())
      .then(result => {
        console.log(result);

        const current = { ...result };
        setWeather({ currentWeather: current });
        console.log(weather);
      })
      .catch(error => {
        // console.log(error);
        setWeather({ currentWeather: 'error' });
      });
  };

  if (
    suggestedLoc.locationSuggestion.length > 0 &&
    suggestedLoc.locationSuggestion[0] !== 'load'
  ) {
    return (
      <div className='location-list'>
        {suggestedLoc.locationSuggestion.map((loc, i) => (
          <p key={loc.city + '-' + i} onClick={e => handleClick(e)}>
            {loc.city + ', ' + loc.country}
          </p>
        ))}
      </div>
    );
  } else if (suggestedLoc.locationSuggestion[0] === 'load') {
    return (
      <div className='location-list'>
        <LocationSkeleton />
      </div>
    );
  }

  return <div className='location-list'></div>;
};

export default LocationList;
