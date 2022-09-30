import Button from "components/Button";
import SearchInput from "components/SearchInput";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowDown from "stories/svg/ArrowDown";
import ArrowRight from "stories/svg/ArrowRight";
import Plus from "stories/svg/Plus";
import "./styles.scss";

const InvoicesTable = ({ children, type }) => {
  const [title, setTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const tableTitle = () => {
      if (type === "properties-without-invoices")
        setTitle("Properties without invoices");
      else if (type === "invoice-documents") setTitle("Invoice documents");
    };
    tableTitle();
  }, []);

  return (
    <Container fluid className="ps-0 pe-0 new-properties-wrapper">
      <Row className="g-0 new-properties-title">
        <Col md={4}>
          <h4>{title}</h4>
          <p className="small-text">You have 37 invoices for 47 properties.</p>
        </Col>
        <Col md={8}>
          <Row className="d-flex align-items-center justify-content-end">
            <Col md={6} className="pe-0">
              <SearchInput
                placeholder={"Search account by account name, role"}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={2} className="pe-0 d-flex justify-content-end">
              <Button className={"w-100"} type="secondary">
                Filters
              </Button>
            </Col>
            <Col md={4} className="d-flex justify-content-end">
              <Link className="w-100" to="/create-new-invoice">
                <Button
                  className={"w-100"}
                  leadingIcon={<Plus fill="#EBD3BD" />}
                >
                  Create new invoice
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="ps-3 pe-3 m-0">
        <hr />
      </Row>

      {children}

      <Row className="ps-3 pe-3 m-0">
        <hr />
      </Row>
      <Row>
        <Col className="d-flex align-items-center justify-content-end view-all">
          <Button type="text" endIcon={<ArrowDown fill="#063561" />}>
            View more
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoicesTable;
