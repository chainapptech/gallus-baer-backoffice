import IconButton from "components/IconButton";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocumentOutline from "stories/svg/DocumentOutline";
import DocumentTextOutlined from "stories/svg/DocumentTextOutlined";
import Dots from "stories/svg/Dots";
import HeartOutline from "stories/svg/HeartOutline";
import "./styles.scss";

const NewPropertyCardInvoice = () => {
  return (
    <Container fluid className="ps-0 pe-0 new-property-card-invoice-wrapper">
      <Row className="g-0 new-card">
        <Col sm={6} md={7}>
          <Row className="m-0 p-0">
            <Col md={5} className="p-0 picture-prop">
              <img width="100px" src="./assets/house1.png" />
            </Col>
            <Col md={7} className="p-0 d-flex align-items-center">
              <div className="value-and-address">
                <h5 className="m-0">CHF 1,260,000.00</h5>
                <p className="small-text">372 Central Park West, Unit 17</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          sm={6}
          md={5}
          className="d-flex align-items-center justify-content-end"
        >
          <div className="me-2 d-flex download-invoice">
            <DocumentTextOutlined />
            <h5 className="ms-2">Download invoice</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPropertyCardInvoice;
