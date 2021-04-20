import { useState, useEffect } from 'react';
import SearchPage from '../search-page/SearchPage';
import './search.scss';

const Search = () => {
  const [location, setLocation] = useState('london');

  useEffect(() => {}, [setLocation]);

  return (
    <form className='search'>
      <label htmlFor='search-input'>
        <input
          type='text'
          id='search-input'
          class='search-input'
          value='london'
          placeholder='Another location'
          onChange={e => setLocation(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Search;
