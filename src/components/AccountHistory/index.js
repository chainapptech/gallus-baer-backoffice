import React from 'react';
import { Col } from 'react-bootstrap';

import './styles.scss';

const AccountHistory = ({ user, history }) => (
  <Col className="account-history">
    <h2 className="mb-3">Account history</h2>
    {history.map(({ id, history }, index) => (
      <p key={index} className="mb-2">
        {history.date} {history.time} <span className="fw-bold">{`@${user}`}</span>{' '}
        <span>{history.action}</span>
      </p>
    ))}
  </Col>
);

export default AccountHistory;
