import InvoiceChoosePackageTable from "components/InvoiceChoosePackageTable";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const InvoiceChoosePackage = () => {
  return (
    <Container fluid className="ps-0 pe-0 invoice-choose-package-wrapper">
      <Row>
        <Col className="choose-package-tabs">
          <Tabs
            defaultActiveKey="zurich"
            id="uncontrolled-tab-example"
            className="mt-0 mb-4 mt-md-4 d-flex align-items-center justify-content-center"
          >
            <Tab
              eventKey="zurich"
              title="Zürich"
              tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
            >
              <InvoiceChoosePackageTable />
            </Tab>
            <Tab
              eventKey="st-gallen"
              title="St. Gallen"
              tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
            >
              <InvoiceChoosePackageTable />
            </Tab>
            <Tab
              eventKey="gallus"
              title="gallus"
              tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
            >
              <InvoiceChoosePackageTable />
            </Tab>
            <Tab
              eventKey="baer"
              title="baer"
              tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
            >
              <InvoiceChoosePackageTable />
            </Tab>
            <Tab
              eventKey="custom"
              title="custom"
              tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
            ></Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoiceChoosePackage;
