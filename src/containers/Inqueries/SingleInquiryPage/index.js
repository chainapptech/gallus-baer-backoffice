import { useState } from "react";
import {
  Col,
  Row,
  Tabs,
  Tab,
  Breadcrumb,
  Container,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "components/Button";
import CalendarDotted from "stories/svg/CalendarDotted";
import SendOutlined from "stories/svg/SendOutlined";
import "./styles.scss";
import ProfileIcon from "components/ProfileIcon";
import Phone from "stories/svg/Phone";
import Time from "stories/svg/Time";
import InquiryCard from "components/InquiryCard";

const selectOptions = ["Not answered", "Answered", "Assigned"];

const SingleInquiryPage = () => {
  const [option, setOption] = useState("Not answered");

  return (
    <Row className="mt-4 single-inquiry-page-wrapper">
      <Col sm={12} md={9}>
        <Row>
          <Col sm={12} md={9}>
            <Breadcrumb className="mt-4 ">
              <Breadcrumb.Item>
                <Link to={"/inquiries"}>Inquiries</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Immoscout 24</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className="mt-2">Immoscout 24</h3>

            <Tabs
              defaultActiveKey="new-inquiries"
              id="uncontrolled-tab-example"
              className="mb-4 mt-4 "
            >
              <Tab
                eventKey="new-inquiries"
                title="New inquiries"
                tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
              >
                {/* Inquiries */}
                <div className="single-inquiry-card">
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
                            <h4>
                              {/* {inquiryItem.account.name}{" "}
                            {inquiryItem.account.surname} */}
                              Jenna Jonnes
                            </h4>
                            <p className="link">
                              {/* {inquiryItem.account.email &&
                              inquiryItem.account.email[0]} */}
                              jennajones@gmail.com
                            </p>
                          </div>
                        </Col>
                        <Col
                          md={12}
                          className="d-flex align-items-center justify-content-start phone-date-time"
                        >
                          <div className="d-flex align-items-center justify-content-start me-3">
                            <div className="me-2">
                              <Phone />
                            </div>
                            <p>+41 467 6655</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-start ms-1 me-3">
                            <div className="me-2">
                              <CalendarDotted />
                            </div>
                            <p>13.03.2022.</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-start ms-1">
                            <div className="me-2">
                              <Time />
                            </div>
                            <p>20:10</p>
                          </div>
                        </Col>
                        <Col
                          md={12}
                          className="d-flex align-items-center justify-content-start"
                        >
                          <p className="me-1">Property:</p>

                          <p className="inquire-address">
                            <b>14 NE 13th St, Miami</b>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label className="m-0">
                          <h5 className="ms-2">Inquiry status</h5>
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
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="single-inquiry-paragraph">
                      <p>
                        Etiam dictum nisi sed dui pretium facilisis. Sed nec
                        nulla ullamcorper, iaculis mi et, tincidunt urna.
                        Aliquam eget velit eget elit facilisis rhoncus quis at
                        ligula. Curabitur vitae feugiat neque. Suspendisse
                        dapibus rutrum metus, id malesuada nibh maximus
                        accumsan. Proin condimentum metus eget venenatis mollis.
                      </p>
                    </Col>
                    <Col md={9}>
                      <Row>
                        <Col>
                          <Button
                            type="secondary"
                            leadingIcon={<CalendarDotted />}
                          >
                            Make an appointment
                          </Button>
                        </Col>
                        <Col>
                          <Button leadingIcon={<SendOutlined fill="#EBD3BD" />}>
                            Send mail
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                {/* Inquiries */}
              </Tab>
              <Tab
                eventKey="answered-inquiries"
                title="Answered inquiries"
                tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
              >
                <InquiryCard />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Col>
      <Col
        sm={12}
        md={3}
        className="d-flex align-items-start justify-content-end"
      >
        <img
          src="../assets/LogoImmoScout24.png"
          alt="Logo"
          className="inquiries-logo-company"
        ></img>
      </Col>
    </Row>
  );
};

export default SingleInquiryPage;
