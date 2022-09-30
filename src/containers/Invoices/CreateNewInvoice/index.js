import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PropertyCard from "components/PropertyCard";
import InputComponent from "components/Input";
import InvoiceChoosePackage from "components/InvoiceChoosePackage";
import data from "./dummy.json";
import "./styles.scss";
import { Link } from "react-router-dom";

const CreateNewInvoice = () => {
  const [properties, setProperties] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeStep, setActiveStep] = useState(0);

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
      <Col
        sm={12}
        md={12}
        className="d-flex align-items-center justify-content-center"
      >
        Stepper
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
          </Col>
          <Col md={1}></Col>
        </>
      )}
    </Row>
  );
};

export default CreateNewInvoice;
