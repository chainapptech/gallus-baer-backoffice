import { useEffect, useState } from "react";
import { useAppContext } from "lib/contextLib";
import { Col, Row, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import InquiryCard from "components/InquiryCard";
import InputComponent from "components/Input";
import "./styles.scss";

const SingleInquiryPage = () => {
  const [currentInquiry, setCurrentInquiry] = useState(null);
  const { selectedTabInquiries } = useAppContext();

  useEffect(() => {
    if (selectedTabInquiries === "new-inquiries")
      setCurrentInquiry("New Inquiries");
    if (selectedTabInquiries === "answered-inquiries")
      setCurrentInquiry("Answered inquiries");
  }, [currentInquiry]);

  return (
    <Row className="mt-4 single-inquiry-page-wrapper">
      <Col sm={12} md={9}>
        <Row>
          <Col sm={12} md={10}>
            <Breadcrumb className="mt-4 ">
              <Breadcrumb.Item>
                <Link to={"/inquiries"}>Inquiries</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{currentInquiry}</Breadcrumb.Item>
            </Breadcrumb>
            <h3 className="mt-2">{currentInquiry}</h3>
            <Row>
              <Col sm={12} className="d-flex d-md-none">
                <img
                  src="../assets/LogoImmoScout24.png"
                  alt="Logo"
                  className="inquiries-logo-company-phone"
                ></img>
              </Col>
            </Row>
            <Row className="inquiries-search">
              <Col sm={12} md={10}>
                <InputComponent placeholder="Search..." type={"search"} />
              </Col>
            </Row>
            <InquiryCard />
            <InquiryCard />
            <InquiryCard />
          </Col>
        </Row>
      </Col>
      <Col
        sm={12}
        md={3}
        className="align-items-start justify-content-end d-none d-md-flex"
      ></Col>
    </Row>
  );
};

export default SingleInquiryPage;
