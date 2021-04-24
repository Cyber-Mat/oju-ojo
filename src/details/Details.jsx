import './details.scss';

const Details = () => (
  <div className='details'>
    <h3 className='details__header'>Weather Details</h3>
    <div className='details__content'>
      {/* <p>
        <span>Cloudiness <span>12%</span>
      </p> */}
      <p>
        <span>Humidity</span> <span>72%</span>
      </p>
      <p>
        <span>Wind</span> <span>1.2m/s</span>
      </p>
      <p>
        <span>Visibility</span> <span>10km</span>
      </p>
      {/* <p>
        <span>Pressure</span> <span>1029hPa</span>
      </p> */}
      <p>
        <span>Dew point</span>
        <span>
          6 <sup>0</sup>C
        </span>
      </p>
      {/* <p>
        <span>UV</span>
        <span>1</span>
      </p> */}
    </div>
  </div>
);

export default Details;
