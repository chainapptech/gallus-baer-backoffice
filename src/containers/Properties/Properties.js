import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Tabs,
  Tab,
  InputGroup,
  FormControl,
  Offcanvas,
  Form,
} from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";

import Button from "components/Button";
import Property from "components/PropertyCard";
import NotificationBadge from "components/NotificationBadge";
import MagnifyingGlass from "stories/svg/MagnifyingGlass";
import Plus from "stories/svg/Plus";
import FilterSvg from "stories/svg/Filter";
import data from "./dummy.json";
import "./styles.scss";
import FilledArrowDown from "stories/svg/FilledArrowDown";

const typeOptions = [
  { label: "Apartment", value: "apartment" },
  { label: "House", value: "house" },
];

const cityOptions = ["New York", "Los Angeles", "Chicago", "Houston"];

const radiusOptions = ["0", "+5km", "+10km", "+15km", "+20km"];

const createdAtOptions = [
  { label: "Today", value: "today" },
  { label: "This week", value: "this-week" },
  { label: "This month", value: "this-month" },
];

const otherDetailsData = [
  { label: "Parking", value: "parking" },
  { label: "Spa", value: "spa" },
  { label: "Swimming Pool", value: "swimming-pool" },
];

const Properties = () => {
  const [show, setShow] = useState(false);
  const [properties, setProperties] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState([]);
  const [cityOrAddres, setCityOrAddres] = useState("");
  const [radius, setRadius] = useState("");
  const [plannedPrice, setPlannedPrice] = useState({ from: 0, to: 0 });
  const [externalPrice, setExternalPrice] = useState({ from: 0, to: 0 });
  const [propertyStatus, setPropertyStatus] = useState([]);
  const [accountsCreated, setAccountsCreated] = useState([]);
  const [otherDetails, setOtherDetails] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    handleClose();
  };

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
                    <Col key={id} sm={12} md={3}>
                      <Property property={property} user={user} id={id} />
                    </Col>
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
                    <Col key={id} sm={12} md={3}>
                      <Property property={property} user={user} id={id} />
                    </Col>
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
                    <Col key={id} sm={12} md={3}>
                      <Property property={property} user={user} id={id} />
                    </Col>
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
        <Form onSubmit={handleSubmit}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="d-flex align-items-center">
              <FilterSvg className="me-3" /> Filter
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h4 className="mb-3">Type of property</h4>
            <MultiSelect
              options={typeOptions}
              value={type}
              onChange={setType}
              ArrowRenderer={FilledArrowDown}
            />

            <h4 className="my-3">Location</h4>
            <Form.Group className="mb-3">
              <Form.Label>City/Address</Form.Label>
              <Form.Select
                className="mb-3"
                onChange={(e) => setCityOrAddres(e.target.value)}
              >
                {cityOptions.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Radious</Form.Label>
              <Form.Select onChange={(e) => setRadius(e.target.value)}>
                {radiusOptions.map((radius) => (
                  <option key={radius}>{radius}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <h4 className="my-3">Planned price range</h4>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    className="border border-2"
                    type="number"
                    placeholder="$ 40 000"
                    onChange={(e) =>
                      setPlannedPrice((state) => ({
                        ...state,
                        from: e.target.value,
                      }))
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    className="border border-2"
                    type="number"
                    placeholder="$ 100 000"
                    onChange={(e) =>
                      setPlannedPrice((state) => ({
                        ...state,
                        to: e.target.value,
                      }))
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <h4 className="my-3">External price estimation range</h4>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    className="border border-2"
                    type="number"
                    placeholder="$ 40 000"
                    onChange={(e) =>
                      setExternalPrice((state) => ({
                        ...state,
                        from: e.target.value,
                      }))
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    className="border border-2"
                    type="number"
                    placeholder="$ 100 000"
                    onChange={(e) =>
                      setExternalPrice((state) => ({
                        ...state,
                        to: e.target.value,
                      }))
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <h4 className="mb-3">Property Status</h4>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id={`active`}
                label={`Active Properties`}
                value="active"
                onChange={(e) =>
                  setPropertyStatus((state) => {
                    if (state.includes(e.target.value)) {
                      return state.filter(
                        (status) => status !== e.target.value
                      );
                    } else {
                      return [...state, e.target.value];
                    }
                  })
                }
              />
              <Form.Check
                type="checkbox"
                id={`inactive`}
                label={`Inactive Properties`}
                onChange={(e) =>
                  setPropertyStatus((state) => {
                    if (state.includes(e.target.value)) {
                      return state.filter(
                        (status) => status !== e.target.value
                      );
                    } else {
                      return [...state, e.target.value];
                    }
                  })
                }
                value="inactive"
              />
            </Form.Group>

            <h4 className="mb-3">Accounts Created</h4>
            <MultiSelect
              options={createdAtOptions}
              value={accountsCreated}
              onChange={setAccountsCreated}
              ArrowRenderer={FilledArrowDown}
              className="mb-3"
            />

            <h4 className="mb-3">Other Details</h4>
            <MultiSelect
              options={otherDetailsData}
              value={otherDetails}
              onChange={setOtherDetails}
              ArrowRenderer={FilledArrowDown}
            />

            <p role="button" className="mt-4 pointer text-primary">
              Clear all filters
            </p>

            <Button type="primary" className="mt-4 w-100">
              Search 2,323 properties
            </Button>
          </Offcanvas.Body>
        </Form>
      </Offcanvas>
    </>
  );
};

export default Properties;
