import { useContext } from 'react';
import LocationContext from '../utils/LocationContext';
import './locationList.scss';

const LocationList = ({ options }) => {
  const [location] = useContext(LocationContext);
  return (
    <div className='location-list'>
      {/* {options.map((option, index) => (
        <p key={option + index}>{option}</p>
      ))} */}

      {location.locationSuggestion.map((loc, i) => (
        <p key={loc.city + '-' + i}>{loc.city + ', ' + loc.country}</p>
      ))}
    </div>
  );
};

export default LocationList;
