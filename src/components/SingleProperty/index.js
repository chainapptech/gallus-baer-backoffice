import React, {useState} from 'react';

import IconButton from '../IconButton';
import Dots from '../../stories/svg/Dots';
import Phone from '../../stories/svg/Phone';
import PaperPlaneOutline from '../../stories/svg/PaperPlaneOutline';
import OutlineHeart from '../../stories/svg/OutlineHeart';

import './styles.scss';

const SingleProperty = ({ price, address, image, hover, table }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e) =>
    e.type === 'mouseenter' ? setIsHovered(true) : setIsHovered(false);

  const accountTypeHandler = () =>
    !table ? (
      <>
        <IconButton icon={<Phone />} />
        <IconButton icon={<PaperPlaneOutline />} />
        <IconButton icon={<OutlineHeart />} />
      </>
    ) : (
      <>
      </>
    );


  return (
    <div
      className={`single-property d-flex align-items-center justify-content-start`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {image ? (
            <img src={`assets/${image}`} alt="property" />
          ) : (
            <img src={`assets/no-property.png`} alt="property"/>
          )}

      <div className="flex-fill ms-3">
        <h5 className='mb-0'>{price} €</h5>
        <p className="small-text light-color">{address}</p>
      </div>

      <div className="label">
        {isHovered || hover ? (
          accountTypeHandler()
        ) : <><IconButton icon={<OutlineHeart />} /></>}
        <IconButton icon={<Dots />} />
      </div>
    </div>
  );
};

export default SingleProperty;
