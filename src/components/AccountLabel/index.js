import React from 'react';
import './styles.scss';
const AccountLabel = ({ role = 'owner', className }) => (
  <div className={`badge ${role} ${className}`}>
    {' '}
    {role.charAt(0).toUpperCase() + role.slice(1)}{' '}
  </div>
);
export default AccountLabel;
