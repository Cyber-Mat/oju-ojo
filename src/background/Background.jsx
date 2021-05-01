import { useContext } from 'react';
import WeatherContext from '../utils/WeatherContext';
import Rainy from '../img/rainy.jpg';
import Cloudy from '../img/cloudy.jpg';
import Snowy from '../img/winter.jpg';
import Santa from '../img/santa.jpg';
import Sunny from '../img/sunny.jpg';
import './background.scss';

const Background = () => {
  const [{ currentWeather }] = useContext(WeatherContext);

  const bg = () => {
    let backgroundImage = '';
    if (currentWeather.weather) {
      switch (currentWeather.weather[0].main) {
        case 'Clouds':
          backgroundImage = `url(${Cloudy})`;
          break;
        case 'Rain':
          backgroundImage = `url(${Rainy})`;
          break;
        case 'Clear':
          backgroundImage = `url(${Sunny})`;
          break;
        case 'Snow':
          backgroundImage = `url(${Snowy})`;
          break;
        default:
          backgroundImage = `url(${Sunny})`;
          break;
      }
    }

    return { backgroundImage };
  };

  return <div className='background' style={bg()}></div>;
};

export default Background;
