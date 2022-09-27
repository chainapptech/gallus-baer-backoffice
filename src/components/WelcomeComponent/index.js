import { Row, Col, Container } from "react-bootstrap";
import WelcomeIlustration from "stories/svg/WelcomeIlustration";
import "./styles.scss";

const WelcomeComponent = () => {
  return (
    <Container fluid className="welcome-component-wrapper">
      <Row>
        <Col md={8}>
          <div className="welcome-intro">
            <p>Welcome back,</p>
            <h2>Lucia Morisson</h2>
          </div>
          <Row className="welcome-statistic mb-4">
            <Col md={4}>
              <h3>24</h3>
              <p>new properties</p>
            </Col>
            <Col md={4}>
              <h3>32</h3>
              <p>new inquiries</p>
            </Col>
            <Col md={4}>
              <h3>8</h3>
              <p>new arranged viewings</p>
            </Col>
          </Row>
          <Row className="welcome-statistic">
            <Col md={4}>
              <h3>14</h3>
              <p>new accounts</p>
            </Col>
            <Col md={4}>
              <h3>4</h3>
              <p>new portal ads</p>
            </Col>
            <Col md={4}>
              <h3>4</h3>
              <p>new successful viewings</p>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="d-flex align-items-center justify-content-end">
          <div className="welcome-ilustration">
            <WelcomeIlustration />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeComponent;
