import React, { useEffect } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import SingleAccount from '../SingleAccount';
import IconButton from '../IconButton';
import RightArrow from '../../stories/svg/RightArrow';
import Button from '../Button';
import './styles.scss';

const ContactedAccounts = ({ contactedAccounts, contacts }) => {
  return (
    <Card className="contacted-accounts">
      <Card.Body>
        <Row className="mb-3">
          <Col>
            <h4>Most contacted accounts</h4>
            <p className="small-text light-color">
              You have {contactedAccounts} accounts
            </p>
          </Col>

          <Col className="d-flex justify-content-end">
            <IconButton />
          </Col>
        </Row>
        <div className="account-wrapper">
          {contacts.map((contact, index) => (
            <SingleAccount user={contact} key={index} />
          ))}
        </div>
        <Row>
          <Col className="d-flex justify-content-end">
            <Button className="mt-3" type={'text'}>
              View all <RightArrow className="ms-3" />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactedAccounts;
