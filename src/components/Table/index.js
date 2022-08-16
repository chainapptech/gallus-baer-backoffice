import React from 'react';

import SingleAccount from '../SingleAccount';
import UserOutline from '../../stories/svg/UserOutline';
import './styles.scss';

const Table = ({ accounts }) => {
  return (
    <div className="d-flex flex-column">
      <div className="table-header d-flex">
        <UserOutline />
        <p>Name</p>
      </div>
      <div className="table-body">
        {accounts.map((contact, index) => (
          <SingleAccount user={contact} key={index} table />
        ))}
      </div>
    </div>
  );
};

export default Table;
