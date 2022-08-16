import React from 'react';
import { Col } from 'react-bootstrap';

import './styles.scss';

const AccountHistory = ({ user, history }) => (
  <Col className="account-history">
    <h2 className="mb-3">Account history</h2>
    {history.map(({ date, time, action }, index) => (
      <p key={index} className="mb-2">
        {date} {time} <span className="fw-bold">{`@${user}`}</span>{' '}
        <span>{action}</span>
      </p>
    ))}
  </Col>
);

export default AccountHistory;
