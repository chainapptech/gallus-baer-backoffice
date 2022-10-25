import { useState } from "react";
import { useAppContext } from "lib/contextLib";
import { Container, Row, Col } from "react-bootstrap";
import Button from "components/Button";
import ProfileIcon from "components/ProfileIcon";
import CalendarDotted from "stories/svg/CalendarDotted";
import Phone from "stories/svg/Phone";
import SendOutlined from "stories/svg/SendOutlined";
import Time from "stories/svg/Time";
import MyRadio from "components/MyRadio";
import "./styles.scss";

const InquiryCard = () => {
  const { selectedTabInquiries } = useAppContext();

  const selectOptions = ["Not answered", "Answered", "Assigned"];

  const [inqueryStatusRadio, setInqueryStatusRadio] = useState("Answered");

  const radioChangeHandler = (e) => {
    setInqueryStatusRadio(e.target.value);
  };

  return (
    <Container className="single-inquiry-card">
      <Row>
        <Col md={9}>
          <Row>
            <Col
              md={12}
              className="d-flex align-items-center justify-content-start info-inquiry"
            >
              <ProfileIcon
                className={"profile-pict"}
                name="Jenna"
                surname="Jonnes"
                image={"../assets/account-1.jpg"}
              />
              <div>
                <h4>Jenna Jonnes</h4>
                <p className="link">jennajones@gmail.com</p>
              </div>
            </Col>
            <Col md={10} className="phone-date-time">
              <Row className="ms-0 ms-md-0">
                <Col sm={12} md={4} className="g-0 mb-2 mb-md-0 me-md-0">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="me-2">
                      <Phone />
                    </div>
                    <p>+41 467 6655</p>
                  </div>
                </Col>
                <Col sm={12} md={4} className="g-0 mb-2 mb-md-0 ms-md-0">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="me-2">
                      <CalendarDotted />
                    </div>
                    <p>13.03.2022.</p>
                  </div>
                </Col>
                <Col sm={12} md={4} className="g-0 mb-2 mb-md-0">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="me-2">
                      <Time />
                    </div>
                    <p>20:10</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              md={12}
              className="d-flex align-items-center justify-content-start mb-3 mb-md-0"
            >
              <p className="me-1">Property:</p>

              <p className="inquire-address">
                <b>14 NE 13th St, Miami</b>
              </p>
            </Col>
            {selectedTabInquiries === "new-inquiries" && (
              <>
                <Col
                  md={12}
                  className="d-flex align-items-center justify-content-start mt-3"
                >
                  <h5>Inquiry Status</h5>
                </Col>
                <Col className="d-flex align-items-center justify-content-start mt-2">
                  {selectOptions.map((item, index) => (
                    <MyRadio
                      onChange={radioChangeHandler}
                      id={index}
                      isSelected={inqueryStatusRadio === item}
                      label={item}
                      value={item}
                      className={"me-4"}
                    />
                  ))}
                </Col>
              </>
            )}
          </Row>
        </Col>
        <Col md={3}>
          {/* <Form.Group>
            <Form.Label className="d-none d-md-block">
              <h5 className="ms-2 ">Inquiry status</h5>
            </Form.Label>
            <Form.Select
              className="mb-3"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              {selectOptions.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </Form.Group> */}
          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              <img
                src="../assets/LogoImmoScout24.png"
                alt="Logo"
                // className="inquiries-logo-company"
              ></img>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="single-inquiry-paragraph-p mt-0 mt-md-4">
          <p>
            Etiam dictum nisi sed dui pretium facilisis. Sed nec nulla
            ullamcorper, iaculis mi et, tincidunt urna. Aliquam eget velit eget
            elit facilisis rhoncus quis at ligula. Curabitur vitae feugiat
            neque. Suspendisse dapibus rutrum metus, id malesuada nibh maximus
            accumsan. Proin condimentum metus eget venenatis mollis.
          </p>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <Button
                className={"single-inquiry-button"}
                type="secondary"
                leadingIcon={<CalendarDotted />}
              >
                Make an appointment
              </Button>
            </Col>
            <Col md={4}>
              <Button
                className={"single-inquiry-button mt-3 mt-md-0"}
                leadingIcon={<SendOutlined fill="#EBD3BD" />}
              >
                Send mail
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default InquiryCard;
