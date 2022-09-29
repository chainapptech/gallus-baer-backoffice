import Button from "components/Button";
import SearchInput from "components/SearchInput";
import { useEffect, useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import services from "./choose-package-data.json";
import "./styles.scss";

const InvoiceChoosePackageTable = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [availableServices, setAvailableServices] = useState([]);

  useEffect(() => {
    setAvailableServices(services);
  }, []);

  return (
    <Container fluid className="ps-0 pe-0 invoice-choose-package-table-wrapper">
      <Row className="g-0 choose-package-header">
        <Col md={5} className="d-flex align-items-center">
          <h5>Available services</h5>
        </Col>
        <Col md={7}>
          <Row className="">
            <Col md={9}>
              <SearchInput
                placeholder={"Search account by account name, role"}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={3} className="d-flex justify-content-end">
              <Button className={"w-100"} type="secondary">
                Filters
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="m-0">
        <hr />
      </Row>
      <Row md={10}>
        <Col md={1} className="d-flex align-items-center">
          <Form.Check className="p-3" type="checkbox" id={`default-checkbox`} />
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <h5>Service name</h5>
        </Col>
        <Col md={2} className="d-flex align-items-center justify-content-end">
          <h5>Price</h5>
        </Col>
      </Row>
      <Row className="m-0">
        <hr />
      </Row>
      <Row md={10}>
        <Col md={1} className="d-flex align-items-center">
          <Form.Check className="p-3" type="checkbox" id={`default-checkbox`} />
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <p>Strategy meeting</p>
        </Col>
        <Col md={2} className="d-flex align-items-center justify-content-end">
          <p>CHF 320</p>
        </Col>
      </Row>

      <Row md={10}>
        <Col md={1} className="d-flex align-items-center">
          <Form.Check className="p-3" type="checkbox" id={`default-checkbox`} />
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <p>Personal contact person / experts</p>
        </Col>
        <Col md={2} className="d-flex align-items-center justify-content-end">
          <p>CHF 1,320</p>
        </Col>
      </Row>
      {children}
    </Container>
  );
};

export default InvoiceChoosePackageTable;
