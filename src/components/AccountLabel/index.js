import React from 'react';
import './styles.scss';
const AccountLabel = ({ role = 'owner' }) => (
  <div className={`badge ${role}`}>
    {' '}
    {role.charAt(0).toUpperCase() + role.slice(1)}{' '}
  </div>
);
export default AccountLabel;
