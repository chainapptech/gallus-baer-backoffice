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
import InputComponent from "components/Input";

const selectOptions = ["Not answered", "Answered", "Assigned"];

const SingleInquiryPage = () => {
  const [option, setOption] = useState("Not answered");

  return (
    <Row className="mt-4 single-inquiry-page-wrapper">
      <Col sm={12} md={9}>
        <Row>
          <Col sm={12} md={10}>
            <Breadcrumb className="mt-4 ">
              <Breadcrumb.Item>
                <Link to={"/inquiries"}>Inquiries</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Immoscout 24</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className="mt-2">Immoscout 24</h3>
            <Row>
              <Col sm={12} className="d-flex d-md-none">
                <img
                  src="../assets/LogoImmoScout24.png"
                  alt="Logo"
                  className="inquiries-logo-company-phone"
                ></img>
              </Col>
            </Row>

            <Tabs
              defaultActiveKey="new-inquiries"
              id="uncontrolled-tab-example"
              className="mt-0 mb-4 mt-md-4"
            >
              <Tab
                eventKey="new-inquiries"
                title="New inquiries"
                tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
              >
                <Row className="inquiries-search">
                  <Col sm={12} md={10}>
                    <InputComponent placeholder="Search..." type={"search"} />
                  </Col>
                </Row>

                <InquiryCard />
                <InquiryCard />
                <InquiryCard />
              </Tab>
              <Tab
                eventKey="answered-inquiries"
                title="Answered inquiries"
                tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
              >
                <Row className="inquiries-search">
                  <Col sm={12} md={10}>
                    <InputComponent placeholder="Search..." type={"search"} />
                  </Col>
                </Row>
                <InquiryCard />
                <InquiryCard />
                <InquiryCard />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Col>
      <Col
        sm={12}
        md={3}
        className="align-items-start justify-content-end d-none d-md-flex"
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
