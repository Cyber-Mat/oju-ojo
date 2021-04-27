import Search from '../search/Search';
import LocationList from '../location-list/LocationList';
import Details from '../details/Details';
import './searchPage.scss';

const SearchPage = () => (
  <div className='search-page'>
    <Search />
    <LocationList />
    <Details />
  </div>
);

export default SearchPage;
