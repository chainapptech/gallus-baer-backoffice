import Button from "components/Button";
import MyCheckbox from "components/MyCheckbox";
import SearchInput from "components/SearchInput";
import { useEffect, useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import services from "./choose-package-data.json";
import "./styles.scss";

const InvoiceChoosePackageTable = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [availableServices, setAvailableServices] = useState([]);

  //state sa checkboxovima
  const [checkedServices, setCheckedServices] = useState({
    allServices: false,
  });

  const addCheckedState = () => {
    const checkedStateMap = services.map(({ id }) => ({ [id]: false }));
    const checkedState = checkedStateMap.reduce((acc, cur) => ({
      ...acc,
      ...cur,
    }));

    setCheckedServices((state) => ({ ...state, ...checkedState }));
  };

  useEffect(() => {
    setAvailableServices(services);
    addCheckedState();
  }, []);

  // console.log(checkedServices);

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

      <Row>
        <Col md={1} className="d-flex align-items-center">
          <MyCheckbox
            checked={
              Object.values(checkedServices).includes(false) ? true : false
            }
            checkedState={checkedServices}
            id={"allServices"}
            setIsChecked={setCheckedServices}
          />
        </Col>
        <Col md={8} className="p-0 d-flex align-items-center col-names">
          <h5>Service name</h5>
        </Col>
        <Col
          md={3}
          className="d-flex align-items-center justify-content-end pe-4 col-names"
        >
          <h5>Price</h5>
        </Col>
      </Row>
      <Row className="m-0">
        <hr />
      </Row>

      {availableServices.map(({ id, serviceName, price }) => (
        <Row key={id}>
          <Col md={1} className="d-flex align-items-center">
            <MyCheckbox
              checked={checkedServices && checkedServices[id]}
              checkedState={checkedServices}
              id={id}
              setIsChecked={setCheckedServices}
            />
          </Col>
          <Col md={8} className="p-0 d-flex align-items-center">
            <p>{serviceName}</p>
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-end pe-4"
          >
            <p>{`CHF ${price}`}</p>
          </Col>
        </Row>
      ))}

      <Row>
        <Col
          md={12}
          className="d-flex align-items-center justify-content-end pe-4"
        >
          <div className="d-flex align-items-center justify-content-center total-price">
            <p className="me-2">Total price:</p>
            <h5 className="m-0">CHF 8,050.00</h5>
          </div>
        </Col>
      </Row>

      {children}
    </Container>
  );
};

export default InvoiceChoosePackageTable;
