import React, { useState } from "react";
import { FiPhone, FiSend } from "react-icons/fi";
import { Card, Col, Row, Modal, Button } from "react-bootstrap";
import { BsCalendarEvent, BsSmartwatch, BsCheckLg } from "react-icons/bs";

import ProfileIcon from "../ProfileIcon";

const InquiriesCard = ({ name, surname, img, address, date, time }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col sm={7}>
              <Card.Title className="d-flex align-items-center">
                <ProfileIcon name={name} surname={surname} className="me-3" />
                {name} {surname}
              </Card.Title>
              <p>
                Property: <b>{address}</b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center">
              <p className="me-3">
                <FiPhone className="me-2" /> +41 446 6677
              </p>
              <p className="me-3">
                <BsCalendarEvent className="me-2" />
                {date}
              </p>
              <p className="me-3">
                <BsSmartwatch className="me-2" />
                {time}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-3">
        <Card.Text>
          Etiam dictum nisi sed dui pretium facilisis. Sed nec nulla
          ullamcorper, iaculis mi et, tincidunt urna. Aliquam eget velit eget
          elit facilisis rhoncus quis at ligula. Curabitur vitae feugiat neque.
          Suspendisse dapibus rutrum metus, id malesuada nibh maximus accumsan.
          Proin condimentum metus eget venenatis mollis.
        </Card.Text>
      </Row>
      <Row>
        <Col className="d-flex align-items-center">
          <p className="me-3">
            <BsCalendarEvent className="me-2" />
            Make an Appontment
          </p>
          <p className="ms-3">
            <FiSend className="me-2" /> Send Email
          </p>
        </Col>
      </Row>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Answered Inquiry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Did you answered this inquiry...? Lorem ipsum dolor sit amet, vince
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="me-4"
            size="lg"
            variant="light"
            onClick={() => setModalShow(false)}
          >
            Close
          </Button>
          <Button size="lg" variant="dark" onClick={() => setModalShow(false)}>
            Answered Inquiry
            <BsCheckLg className="ms-2" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InquiriesCard;
