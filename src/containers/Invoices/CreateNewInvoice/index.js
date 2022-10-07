import { useEffect, useState } from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import PropertyCard from "components/PropertyCard";
import InputComponent from "components/Input";
import InvoiceChoosePackage from "components/InvoiceChoosePackage";
import data from "./dummy.json";
import "./styles.scss";
import { Link } from "react-router-dom";
import Stepper from "components/Stepper";
import Button from "components/Button";
import InvoiceSummary from "components/InvoiceSummary";

const CreateNewInvoice = () => {
  const [properties, setProperties] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPropertyId, setSelectedPropertyId] = useState();
  const [selectedProperty, setSelectedProperty] = useState();

  const steps = [
    {
      name: "Choose a property",
    },
    {
      name: "Choose a package",
    },
    {
      name: "Summary",
    },
  ];

  useEffect(() => {
    if (searchTerm.length === 0) {
      setProperties(data);
    }

    const searchedProperties = data.filter(({ property }) =>
      property.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProperties(searchedProperties);
  }, [searchTerm]);

  const handleClickProperty = (id, property) => {
    setSelectedPropertyId(id);
    setSelectedProperty(property);
    setActiveStep((curr) => curr + 1);
  };

  return (
    <Row className="create-new-invoice-wrapper">
      {activeStep !== 0 && (
        <Col sm={12} md={12} className="pt-4">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={"/invoices"}>Invoices</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {selectedProperty?.address}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      )}

      {activeStep === 0 && <Col md={12} className="pt-2"></Col>}

      <Col className="mt-2 pb-4">
        <h3>Create a new invoice</h3>
      </Col>

      <Col sm={12} md={12}>
        <Row className="d-flex justify-content-center">
          <Col sm={10} className="mt-4">
            <Stepper steps={steps} activeIndex={activeStep} />
          </Col>
        </Row>
      </Col>

      {activeStep === 0 && (
        <>
          <Col md={3}></Col>
          <Col md={6} className="mt-4 mb-4">
            <InputComponent
              placeholder="Search..."
              type={"search"}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={3}></Col>
        </>
      )}

      {activeStep === 0 && (
        <Col md={12}>
          <Row className="g-4" sm={1} md={3} lg={4}>
            {properties
              .filter(({ property }) => property.approved)
              .map(({ id, property, user }) => (
                <Col
                  key={id}
                  sm={12}
                  md={6}
                  onClick={() => handleClickProperty(id, property)}
                >
                  <PropertyCard
                    property={property}
                    user={user}
                    id={id}
                    visibleLink={false}
                  />
                </Col>
              ))}
          </Row>
        </Col>
      )}

      {activeStep === 1 && (
        <>
          <Col md={1}></Col>
          <Col md={10}>
            <InvoiceChoosePackage />
            <Row>
              <Col md={12} className="mt-5 d-flex justify-content-end">
                <Button
                  onClick={() => setActiveStep(0)}
                  type={"text"}
                  className="me-2"
                >
                  Back
                </Button>
                <Button onClick={() => setActiveStep(2)} className="ms-1">
                  Next
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </>
      )}

      {activeStep === 2 && (
        <>
          <Col md={1}></Col>
          <Col md={10} className="mt-5">
            <InvoiceSummary
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </Col>
          <Col md={1}></Col>
        </>
      )}
    </Row>
  );
};

export default CreateNewInvoice;
