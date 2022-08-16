import React, { useState } from 'react';

import HouseOutline from '../../stories/svg/HouseOutline';
import HouseFill from '../../stories/svg/HouseFill';
import NotificationBadge from '../NotificationBadge';

import './styles.scss';

const SidebarLink = ({notificationNumber}) => {
  const [showFillIcon, setShowFillIcon] = useState(false);

  function showFillIconHandler() {
    setShowFillIcon(true);
  }

  return (
    <button
      onMouseDown={showFillIconHandler}
      className="d-flex mb-4 py-2 px-3 sidebar-links"
    >
      <div className='d-flex justify-content-between align-items-center inner-button'>
        <div className='d-flex align-items-center'>
          {showFillIcon ? (
            <HouseFill className="house-fill-svg" />
          ) : (
            <HouseOutline />
          )}
          <p className="mb-0 link-text">Home</p>
        </div>
        {notificationNumber > 0 ? <NotificationBadge number={notificationNumber}/> : <></>}
      </div>
    </button>
  );
};

export default SidebarLink;
