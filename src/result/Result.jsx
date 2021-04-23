import { useContext } from 'react';
import { IoRainyOutline } from 'react-icons/io5';
import LocationContext from '../utils/LocationContext';
import './result.scss';

// IoSearchOutline;

const Result = () => {
  const [location] = useContext(LocationContext);
  return (
    <div className='result'>
      <h1 className='temperature'>
        08 <sup>O</sup>
      </h1>
      <div className='exp'>
        <div className='top-div'>
          <h1 className='location'>{location.city}</h1>
          <IoRainyOutline className='icon-res' />
        </div>
        <div className='bottom-div'>
          <p className='date'>
            <span>06:09</span> <span>Monday, 19 Apr '21</span>
          </p>

          <p className='weather'>Rainy</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
