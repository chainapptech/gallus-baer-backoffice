import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProfileIcon from '../ProfileIcon';

import './styles.scss';
const Notification = ({ name, surname, message }) => {
  return (
    <Row>
      <Col sm={12} className="d-flex mb-3 align-items-center">
        <ProfileIcon name={name} surname={surname} className="me-3" />
        <p className="m-0">{message}</p>
      </Col>
    </Row>
  );
};

export default Notification;
