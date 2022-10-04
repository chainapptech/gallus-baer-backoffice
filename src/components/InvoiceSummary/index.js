import Button from "components/Button";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DocumentTextOutlined from "stories/svg/DocumentTextOutlined";
import SendOutlined from "stories/svg/SendOutlined";
import checked from "./invoice-summary.json";
import "./styles.scss";

const InvoiceSummary = ({ activeStep, setActiveStep }) => {
  const [checkedServices, setCheckedServices] = useState([]);

  useEffect(() => {
    setCheckedServices(checked);
  }, [checked]);

  const totalPrice = checkedServices.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleActiveStep = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container fluid className="ps-0 pe-0 invoice-summary-wrapper">
      <Row className="invoice-summary-title">
        <h5>
          The invoice that will be sent to the client includes these services:
        </h5>
      </Row>

      {checkedServices?.map(({ serviceName, price }) => (
        <Row key={serviceName} className="invoice-summary-item">
          <Col md={8}>
            <p>{serviceName}</p>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-end">
            <h5 className="m-0">{`CHF ${price}.00`}</h5>
          </Col>
          <Col md={12} className="m-0">
            <hr />
          </Col>
        </Row>
      ))}

      <Row className="invoice-summary-total-price">
        <Col className="d-flex align-items-center justify-content-end">
          <p className="me-2">Total price:</p> <h4>{`CHF ${totalPrice}.00`}</h4>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Button type="secondary" leadingIcon={<DocumentTextOutlined />}>
            Download invoice for this property
          </Button>
        </Col>
        <Col md={1}>
          <Button className={"w-100"} type={"text"} onClick={handleActiveStep}>
            Back
          </Button>
        </Col>
        <Col md={3}>
          <Button
            className={"w-100"}
            leadingIcon={<SendOutlined fill="#EBD3BD" />}
          >
            Send this invoice
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoiceSummary;
