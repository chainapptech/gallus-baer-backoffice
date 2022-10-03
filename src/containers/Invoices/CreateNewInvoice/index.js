import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PropertyCard from "components/PropertyCard";
import InputComponent from "components/Input";
import InvoiceChoosePackage from "components/InvoiceChoosePackage";
import data from "./dummy.json";
import "./styles.scss";
import { Link } from "react-router-dom";
import Stepper from "components/Stepper";
import Button from "components/Button";

const CreateNewInvoice = () => {
  const [properties, setProperties] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeStep, setActiveStep] = useState(1);

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

  return (
    <Row className="create-new-invoice-wrapper">
      <Col sm={12} md={12} className="pt-4 pb-4">
        <h3>Create new invoice</h3>
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
                <Col key={id} sm={12} md={6}>
                  <Link to="/invoices">
                    <PropertyCard property={property} user={user} id={id} />
                  </Link>
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
    </Row>
  );
};

export default CreateNewInvoice;
