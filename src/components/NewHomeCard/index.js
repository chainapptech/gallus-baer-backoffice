import Button from "components/Button";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowRight from "stories/svg/ArrowRight";
import Plus from "stories/svg/Plus";
import "./styles.scss";

const NewHomeCard = ({ children, type }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const tableTitle = () => {
      if (type === "properties") setTitle("My managed properties");
      else if (type === "accounts") setTitle("Related accounts");
      else setTitle("New inquiries");
    };
    tableTitle();
  }, []);

  return (
    <Container fluid className="ps-0 pe-0 new-properties-wrapper">
      <Row className="g-0 new-properties-title">
        <Col md={6}>
          <h4>{title}</h4>
          <p className="small-text">You have 37 new {type}.</p>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-end">
          <div className="plus-icon">
            <Plus />
          </div>
        </Col>
      </Row>
      <Row className="ps-3 pe-3 m-0">
        <hr />
      </Row>
      {/* KARTICA */}

      {children}

      {/* KARTICA */}

      <Row className="ps-3 pe-3 m-0">
        <hr />
      </Row>
      <Row>
        <Col className="d-flex align-items-center justify-content-end view-all">
          <Link to={`/${type}`}>
            <Button type="text" endIcon={<ArrowRight fill="#063561" />}>
              View all {type}
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NewHomeCard;
