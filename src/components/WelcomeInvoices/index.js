import { Row, Col, Container } from "react-bootstrap";
import WelcomeInvoicesIlustration from "stories/svg/WelcomeIlustrationInvoices";
import "./styles.scss";

const WelcomeInvoices = () => {
  return (
    <Container fluid className="welcome-invoices-wrapper">
      <Row>
        <Col md={8}>
          <div className="welcome-intro">
            <h2>Invoices</h2>
          </div>
          <Row className="welcome-statistic">
            <Col className="p-0" md={4}>
              <h3>12</h3>
              <p>new invoices created today</p>
            </Col>
            <Col className="p-0" md={4}>
              <h3>63</h3>
              <p>outstanding invoices</p>
            </Col>
            <Col className="p-0" md={4}>
              <h3>8</h3>
              <p>new properties without invoicess</p>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="d-flex align-items-center justify-content-end">
          <div className="welcome-ilustration">
            <WelcomeInvoicesIlustration />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeInvoices;
