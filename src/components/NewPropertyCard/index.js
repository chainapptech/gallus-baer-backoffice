import IconButton from "components/IconButton";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CalendarDotted from "stories/svg/CalendarDotted";
import Dots from "stories/svg/Dots";
import HeartOutline from "stories/svg/HeartOutline";
import Phone from "stories/svg/Phone";
import SendOutlined from "stories/svg/SendOutlined";
import "./styles.scss";

const NewPropertyCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e) =>
    e.type === "mouseenter" ? setIsHovered(true) : setIsHovered(false);

  return (
    <Container
      fluid
      className="ps-0 pe-0 new-property-card-wrapper"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
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
          <Row className="g-0 d-flex align-items-center justify-content-center">
            {isHovered && (
              <>
                <Col>
                  <IconButton icon={<Phone fill="#084474" />} />
                </Col>
                <Col>
                  <IconButton icon={<SendOutlined fill="#084474" />} />
                </Col>
                <Col>
                  <IconButton icon={<CalendarDotted fill="#084474" />} />
                </Col>
              </>
            )}
            <Col>
              <IconButton icon={<HeartOutline fill="#084474" />} />
            </Col>
            <Col>
              <IconButton icon={<Dots fill="#084474" />} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPropertyCard;
