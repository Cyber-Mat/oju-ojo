import { useEffect, useContext } from 'react';
import LocationContext from '../utils/LocationContext';
import WeatherContext from '../utils/WeatherContext';
import SuggestedLocContext from '../utils/SuggestedLocContext';
import { IoSearchOutline } from 'react-icons/io5';
import './search.scss';
import Skeleton from '../utils/Skeleton';

const Search = ({ cities }) => {
  const [location, setLocation] = useContext(LocationContext);
  const setWeather = useContext(WeatherContext)[1];
  const setSuggestedLoc = useContext(SuggestedLocContext)[1];

  const IP_API_KEY = process.env.REACT_APP_IP_API_KEY;
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const GEOCODE_API_KEY = process.env.REACT_APP_GEOCODE_API_KEY;

  const ipURL = `https://api.ipgeolocation.io/ipgeo?apiKey=${IP_API_KEY}&fields=geo`;
  const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${WEATHER_API_KEY}`;

  useEffect(() => {
    fetch(ipURL)
      .then(data => data.json())
      .then(result => {
        console.log(result);

        const { city, latitude, longitude } = result;
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

  const handleSubmit = e => {
    const val = e.target[0].value;
    const value = val.charAt(0).toUpperCase() + val.slice(1);

    const geoCodeUrl = ` https://geocode.search.hereapi.com/v1/geocode?q=${value}&apiKey=${GEOCODE_API_KEY}`;

    fetch(geoCodeUrl)
      .then(data => data.json())
      .then(result => console.log(result))
      .catch(error => console.log(error));

    // const weatherURL2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`;

    // fetch(weatherURL2)
    //   .then(data => data.json())
    //   .then(result => {
    //     console.log(result);

    //     const { current } = result;
    //     setWeather({ currentWeather: current });
    //   })
    //   .catch(error => console.log(error));
  };

  const handleChange = e => {
    if (e.target.value) {
      setSuggestedLoc({ locationSuggestion: ['load'] });
      const autoSuggestUrl = `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${e.target.value}&apiKey=${GEOCODE_API_KEY}`;

      fetch(autoSuggestUrl)
        .then(data => data.json())
        .then(({ items }) => {
          console.log({ items });
          const suggestedArr = items.map(item => ({
            city: item.address.city ? item.address.city : item.address.label,
            country: item.address.countryName,
          }));
          console.log(suggestedArr);
          setSuggestedLoc({ locationSuggestion: suggestedArr });
        })
        .catch(error => console.log(error));
    }
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
        onChange={e => handleChange(e)}
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
