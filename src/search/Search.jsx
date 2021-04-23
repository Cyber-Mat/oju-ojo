import { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import './search.scss';

const Search = () => {
  const [location, setLocation] = useState('');
  // const URL =
  //   'http://api.ipstack.com/102.89.2.131?access_key=dd40220ecf3f68e68b82ccf505116689';

  // const URL = 'https://cors-proxy.htmldriven.com/?url=https://ipapi.co/json/';

  // const URL =
  //   'https://api.openweathermap.org/data/2.5/weather?q=london&appid=1e2993fa366a3ffb691cc7a529865017';

  useEffect(() => {
    // fetch(URL)
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));
  }, [setLocation]);

  return (
    <form className='search' autoComplete='off'>
      <input
        type='text'
        id='search-input'
        className='search__input'
        value={location}
        placeholder='Another location'
        onChange={e => setLocation(e.target.value)}
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
