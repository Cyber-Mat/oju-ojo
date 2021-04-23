import './locationList.scss';

const LocationList = ({ options }) => {
  return (
    <div className='location-list'>
      {options.map((option, index) => (
        <p key={option + index}>{option}</p>
      ))}
    </div>
  );
};

export default LocationList;
