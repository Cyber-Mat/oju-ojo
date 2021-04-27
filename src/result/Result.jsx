import { useContext } from 'react';
import LocationContext from '../utils/LocationContext';
import WeatherContext from '../utils/WeatherContext';
import { IoRainyOutline } from 'react-icons/io5';
import './result.scss';
import Skeleton from '../utils/Skeleton';

// IoSearchOutline;

const Result = () => {
  const [location] = useContext(LocationContext);
  const [weather] = useContext(WeatherContext);
  // const currentTime = new Date(weather.currentWeather.dt * 1000);
  // console.log(currentTime);

  if (weather.currentWeather > 0) {
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
            <h1 className='location'>{location.city}</h1>
            <IoRainyOutline className='icon-res' />
          </div>
          <div className='bottom-div'>
            <p className='date'>
              <span>06:09</span> <span>Sat, 24 Apr '21</span>
            </p>
            <p className='weather'>{`${weather.currentWeather.weather[0].main}`}</p>
            {/* (${weather.currentWeather.weather.description}) */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='result'>
        <Skeleton />
      </div>
    );
  }
};

export default Result;
