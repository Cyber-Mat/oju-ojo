import Search from '../search/Search';
import LocationList from '../location-list/LocationList';
import './searchPage.scss';
import Details from '../details/Details';

const SearchPage = () => (
  <div className='search-page'>
    <Search />
    <LocationList
      options={['Saki', 'Manchester', 'Ilorin', 'Abule-Egba', 'Kaduna']}
    />

    <Details />
  </div>
);

export default SearchPage;
