import React from 'react';

import SingleAccount from '../SingleAccount';
import { Link } from 'react-router-dom';

import './styles.scss';

const Table = ({ accounts }) => {
  return (
    <div className="d-flex flex-column accounts-table">
      <div className='table-name'>
        <h4>Accounts</h4>
      </div>
      <div className="table-header d-flex justify-content-between">
        <h5>Account name</h5>
        <h5 className='role-name'>Role</h5>
      </div>
      <div className="table-body">
        {accounts.map((contact, index) => (
          <Link key={index} to={`/singleaccount?id=${contact.name && contact.name.split(' ')[0]}`} >
            <SingleAccount user={contact} table />
          </Link>
        ))}
      </div>

      <div className='table-footer'></div>
    </div>
  );
};

export default Table;
