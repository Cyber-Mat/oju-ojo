import { useContext } from 'react';
import LocationContext from '../utils/LocationContext';
import WeatherContext from '../utils/WeatherContext';
import {
  IoRainyOutline,
  IoCloudOutline,
  IoSunnyOutline,
  IoSnowOutline,
} from 'react-icons/io5';
import './result.scss';
import { ResultSkeleton } from '../utils/Skeleton';

// IoSearchOutline;

const Result = () => {
  const [location] = useContext(LocationContext);
  const [weather] = useContext(WeatherContext);

  const displayIcon = () => {
    switch (weather.currentWeather.weather[0].main) {
      case 'Clouds':
        return <IoCloudOutline className='icon-res' />;
      case 'Clear':
        return <IoSunnyOutline className='icon-res' />;

      case 'Rain':
        return <IoRainyOutline className='icon-res' />;

      case 'Snow':
        return <IoSnowOutline className='icon-res' />;

      default:
        return <IoSunnyOutline className='icon-res' />;
    }
  };

  if (weather.currentWeather === '') {
    return (
      <div className='result'>
        <ResultSkeleton />
      </div>
    );
  } else if (
    weather.currentWeather === 'error' ||
    weather.currentWeather.message
  ) {
    return (
      <div className='result'>
        <h1>Weather for location not found</h1>
        <br />
        <h1>Please try another location</h1>
        <br />
        <h1>or check your internet connection </h1>
      </div>
    );
  } else {
    const currentTime = new Date(weather.currentWeather.dt * 1000);
    const date = currentTime.toDateString().split(' ');
    const time = currentTime.toLocaleTimeString().split(':');
    console.log(currentTime);
    return (
      <div className='result'>
        <h1 className='temperature'>
          {weather.currentWeather.temp
            ? Math.round(+weather.currentWeather.temp)
            : Math.round(+weather.currentWeather.main.temp)}
          <sup>O</sup>
        </h1>
        <div className='exp'>
          <div className='top-div'>
            <h1 className='location'>
              {location.city.split(' ')[1]
                ? location.city.split(' ')[0] +
                  ' ' +
                  location.city.split(' ')[1].charAt(0) +
                  '.'
                : location.city.split(' ')[0]}
            </h1>
            {displayIcon(weather.currentWeather.weather[0].main)}
          </div>
          <div className='bottom-div'>
            <p className='date'>
              <span>{time[0] + ':' + time[1] + ' '}</span>
              <span>
                -
                {' ' +
                  date[0] +
                  ', ' +
                  date[2] +
                  ' ' +
                  date[1] +
                  " '" +
                  date[3].charAt(2) +
                  date[3].charAt(3)}
              </span>
            </p>
            <p className='weather'>{`${weather.currentWeather.weather[0].main}`}</p>
            {/* (${weather.currentWeather.weather.description}) */}
          </div>
        </div>
      </div>
    );
  }
};

export default Result;
