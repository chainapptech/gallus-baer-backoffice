import InvoicesTable from "components/InvoicesTable";
import NewPropertyCard from "components/NewPropertyCard";
import NewPropertyCardInvoice from "components/NewPropertyCardInvoice";
import WelcomeInvoices from "components/WelcomeInvoices";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import "./styles.scss";

const Invoices = () => {
  let titleTable = ["properties-without-invoices", "invoice-documents"];
  return (
    <Row className="invoices-wrapper">
      <Col sm={12} md={12}>
        <WelcomeInvoices />
      </Col>
      <Col sm={12} md={12} className="m-0 invoices-tabs">
        <Tabs
          defaultActiveKey="new-properties"
          id="uncontrolled-tab-example"
          className="mt-0 mb-4 mt-md-4"
        >
          <Tab
            eventKey="new-properties"
            title="New properties"
            tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
          >
            <InvoicesTable type={"properties-without-invoices"}>
              <NewPropertyCardInvoice />
              <NewPropertyCardInvoice />
              <NewPropertyCardInvoice />
              <NewPropertyCardInvoice />
            </InvoicesTable>
          </Tab>
          <Tab
            eventKey="all-invoices"
            title="All invoices"
            tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
          >
            <InvoicesTable type={"invoice-documents"}>
              <NewPropertyCardInvoice />
              <NewPropertyCardInvoice />
              <NewPropertyCardInvoice />
              <NewPropertyCardInvoice />
            </InvoicesTable>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Invoices;
