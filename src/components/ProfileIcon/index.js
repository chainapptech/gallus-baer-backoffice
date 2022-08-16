import React from 'react';
import { Col } from 'react-bootstrap';

import User from '../../stories/svg/User';
import './styles.scss';

const ProfileIcon = ({ name, surname, image, className, size = 'lg' }) => (
  <div
    className={`profile-icon d-flex align-items-center justify-content-center text-center rounded-circle ${className} ${size}`}
  >
    {!image ? (
      <>
        {name && surname ? (
          <Col>
            {name.charAt(0)}
            {surname.charAt(0)}
          </Col>
        ) : (
          <User />
        )}
      </>
    ) : (
      <img src={`assets/account-${image}.png`} alt="avatar" />
    )}
  </div>
);

export default ProfileIcon;
