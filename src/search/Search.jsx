import { useEffect, useContext, useState } from 'react';
import LocationContext from '../utils/LocationContext';
import WeatherContext from '../utils/WeatherContext';
import { IoSearchOutline } from 'react-icons/io5';
import './search.scss';

const Search = ({ cities }) => {
  const [location, setLocation] = useContext(LocationContext);
  const setWeather = useContext(WeatherContext)[1];

  const ApiKey = process.env.REACT_APP_API_KEY;
  const ipURL = 'https://cors-anywhere.herokuapp.com/https://ipapi.co/json/';
  const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${ApiKey}`;

  useEffect(() => {
    fetch(ipURL)
      .then(data => data.json())
      .then(result => {
        console.log(result);

        const { city, latitude, longitude } = result;
        console.log({ latitude, longitude });
        setLocation({ city, latitude, longitude });
      })
      .then(() => {
        fetch(weatherURL)
          .then(data => data.json())
          .then(result => {
            console.log(result);
            const { current } = result;
            setWeather({ currentWeather: current });
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {}, [ApiKey, city, setLocation, setWeather]);

  const [city, setCity] = useState('');

  const handleSubmit = e => {
    const val = e.target[0].value;
    const value = val.charAt(0).toUpperCase() + val.slice(1);

    cities.map(obj => {
      obj.cities.forEach((item, i, a) => {
        if (value === item) {
          setCity(item);
          console.log(city);
        }
      });
      return value;
    });

    const weatherURL2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`;

    fetch(weatherURL2)
      .then(data => data.json())
      .then(result => {
        console.log(result);

        const { current } = result;
        setWeather({ currentWeather: current });
      })
      .catch(error => console.log(error));
  };

  return (
    <form
      className='search'
      autoComplete='off'
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <input
        type='text'
        id='search-input'
        className='search__input'
        // value={location.city}
        placeholder='Another location'
        // onChange={e => setLocation({ city: e.target.value })}
        onFocus={e => (e.target.value = '')}
      />
      <label className='search__label' htmlFor='search-input'>
        Another location
      </label>

      <button className='search__button' type='submit'>
        <IoSearchOutline />
      </button>
    </form>
  );
};

export default Search;
