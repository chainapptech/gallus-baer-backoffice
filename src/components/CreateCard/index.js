import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Button from '../Button';
import './styles.scss';

const CreateCard = ({ title, text, img, buttonText }) => {
  return (
    <Card className="create-card h-100">
      <Card.Body>
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm={6}>
            <h4 className="ps-2 create-card-title">{title}</h4>
            <p className="mt-2">{text}</p>
            <Button className={"mt-4"}>{buttonText}</Button>
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
