import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Button from '../Button';
import './styles.scss';

const CreateCard = ({ title, text, img }) => {
  return (
    <Card>
      <Card.Body>
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm={6}>
            <Card.Title className="ps-2 create-card-title">{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button>{title}</Button>
          </Col>
          <Col sm={5}>
            <img src={`assets/${img}`} alt="vector" width={'100%'} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

CreateCard.defaultProps = {
  title: 'Create user',
  text: 'User will be either automaticaly created once you set up SSO, or you can start creating internal users.',
  img: 'account.png',
};

export default CreateCard;
