import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Tabs,
  Tab,
  InputGroup,
  FormControl,
  Button as BootstrapButton,
  Offcanvas,
  Form,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import Plus from "stories/svg/Plus";
import Button from "components/Button";
import Property from "components/PropertyCard";
import data from "./dummy.json";

import "./styles.scss";
import MagnifyingGlass from "stories/svg/MagnifyingGlass";
import NotificationBadge from "components/NotificationBadge";

const Properties = () => {
  const [show, setShow] = useState(false);
  const [properties, setProperties] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    cityOrAddress: "",
    radius: "",
    plannedPriceRange: {
      from: 0,
      to: 0,
    },
    externalPriceRange: {
      from: 0,
      to: 0,
    },
    activeProperties: true,
    inactiveProperties: false,
    accountsCreated: "",
    otherDetails: "",
  });

  useEffect(() => {
    if (searchTerm.length === 0) {
      setProperties(data);
    }

    const filteredProperties = data.filter(({ property }) =>
      property.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProperties(filteredProperties);
  }, [searchTerm]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="mt-4 properties">
        <Col sm={6} md={12}>
          <Col className="d-flex align-items-center justify-content-between">
            <h2 className="py-3 mb-2">Properties</h2>
            <Button leadingIcon={<Plus fill="#EBD3BD" />}>
              Create new property
            </Button>
          </Col>

          <Tabs
            defaultActiveKey="approved"
            id="uncontrolled-tab-example"
            className="mb-4"
          >
            <Tab
              eventKey="approved"
              title="Approved properties"
              tabClassName="position-relative"
            >
              <Row className="d-flex justify-content-end mb-2 w-100">
                <Col sm={12} md={4}>
                  <InputGroup className="d-flex align-items-center mb-3 ps-3 bg-white rounded-1 border border-1 border-grey">
                    <MagnifyingGlass fill="#000" scale={0.8} />
                    <FormControl
                      placeholder="Search property by address"
                      className="p-2 border-0 bg-transparent shadow-none"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col sm={12} md={1}>
                  <Button type="secondary" onClick={handleShow}>
                    Filters
                  </Button>
                </Col>
              </Row>

              <Row className="g-4" sm={1} md={3} lg={4}>
                {properties
                  .filter(({ property }) => property.approved)
                  .map(({ id, property, user }) => (
                    <Property key={id} property={property} user={user} />
                  ))}
              </Row>
            </Tab>
            <Tab eventKey="waiting-for-approval" title="Waitting for approval">
              <Row className="d-flex justify-content-end mb-2 w-100">
                <Col sm={12} md={4}>
                  <InputGroup className="d-flex align-items-center mb-3 ps-3 bg-white rounded-1 border border-1 border-grey">
                    <MagnifyingGlass fill="#000" scale={0.8} />
                    <FormControl
                      placeholder="Search property by address"
                      className="p-2 border-0 bg-transparent shadow-none"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col sm={12} md={1}>
                  <Button type="secondary" onClick={handleShow}>
                    Filters
                  </Button>
                </Col>
              </Row>

              <Row className="g-3">
                {properties
                  .filter(({ property }) => !property.approved)
                  .map(({ id, property, user }) => (
                    <Property key={id} property={property} user={user} />
                  ))}
              </Row>
            </Tab>
            <Tab eventKey="unnaproved" title="Unapproved properties">
              <Row className="d-flex justify-content-end mb-2 w-100">
                <Col sm={12} md={4}>
                  <InputGroup className="d-flex align-items-center mb-3 ps-3 bg-white rounded-1 border border-1 border-grey">
                    <MagnifyingGlass fill="#000" scale={0.8} />
                    <FormControl
                      placeholder="Search property by address"
                      className="p-2 border-0 bg-transparent shadow-none"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col sm={12} md={1}>
                  <Button type="secondary" onClick={handleShow}>
                    Filters
                  </Button>
                </Col>
              </Row>

              <Row className="g-3">
                {properties
                  .filter(({ property }) => property.unapproved)
                  .map(({ id, property, user }) => (
                    <Property key={id} property={property} user={user} />
                  ))}
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Offcanvas
        backdropClassName="backdrop"
        placement={"end"}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>All filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3 className="mb-3">Type of property</h3>
          <p className="mb-2">What are you looking to buy?</p>

          <h3 className="my-3">Location</h3>

          <Form.Group className="mb-3">
            <Form.Label>City/Town</Form.Label>
            <Form.Select className="mb-3">
              <option>Select location</option>
              <option>Zürich</option>
              <option>Geneva</option>
              <option>Basel</option>
              <option>Lausanne</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Radious</Form.Label>
            <Form.Select>
              <option>0km</option>
              <option>+5km</option>
              <option>+10km</option>
              <option>+20km</option>
            </Form.Select>
          </Form.Group>

          <h3 className="my-3">Price range</h3>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" placeholder="$ 40 000" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" placeholder="$ 100 000" />
              </Form.Group>
            </Col>
          </Row>

          <h3 className="my-3">Other details</h3>

          <Form.Check type="checkbox" label="Parking" />

          <Form.Check type="checkbox" label="Spa" />

          <Form.Check type="checkbox" label="Swimming pool" />

          <Form.Check type="checkbox" label="Fitness centre" />

          <Form.Check
            type="checkbox"
            label="Electric vehicle charging station"
          />

          <Form.Check type="checkbox" label="Teracce" />

          <Form.Check type="checkbox" label="View" />

          <Form.Check type="checkbox" label="Washing machine" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Properties;
