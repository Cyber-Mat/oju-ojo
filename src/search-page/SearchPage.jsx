import Search from '../search/Search';
import LocationList from '../location-list/LocationList';
import './searchPage.scss';

const SearchPage = () => (
  <div className='search-page'>
    <Search />
    <LocationList
      options={['Saki', 'Manchester', 'Ilorin', 'Abule-Egba', 'Kaduna']}
    />
  </div>
);

export default SearchPage;
