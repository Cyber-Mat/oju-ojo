import Search from '../search/Search';
import LocationList from '../location-list/LocationList';
import './searchPage.scss';
import Details from '../details/Details';

const SearchPage = ({ cities }) => (
  <div className='search-page'>
    <Search cities={cities} />
    <LocationList
      options={['Saki', 'Manchester', 'Ilorin', 'Abule-Egba', 'Kaduna']}
    />

    <Details />
  </div>
);

export default SearchPage;
