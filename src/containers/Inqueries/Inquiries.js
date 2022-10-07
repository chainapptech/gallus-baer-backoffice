import { useState } from "react";
import { Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import InquiriesTableRow from "components/InquiriesTableRow";
import inquiries from "./inqueries-data.json";
import newInquiries from "./new-inqueries-data-table.json";
import InquiryTable from "components/InquiryTable";
import "./styles.scss";

const Inquiries = () => {
  const [currentTab, setCurrentTab] = useState("new-inquiries");

  return (
    <Row className="inquires-wrapper">
      <Col sm={12} md={12}>
        <Row>
          <Col sm={12} md={12}>
            <h2 className="title-inquires">Inquiries</h2>
          </Col>
          <Col>
            <Tabs
              id="uncontrolled-tab-example"
              activeKey={currentTab}
              onSelect={(tab) => setCurrentTab(tab)}
              className="mb-4"
            >
              <Tab
                eventKey="new-inquiries"
                title="New inquiries"
                tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
              >
                <Col>
                  <InquiryTable inquiries={inquiries} />
                </Col>
              </Tab>
              <Tab
                eventKey="answered-inquiries"
                title="Answered inquiries"
                tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
              >
                <Col>
                  <InquiryTable inquiries={inquiries} />
                </Col>
              </Tab>
            </Tabs>
          </Col>
          {/* <Col
            className="d-flex align-items-center justify-content-end"
            sm={12}
            md={12}
          >
            <Button
              className={"mb-2"}
              type="text"
              endIcon={<ArrowDown fill="#063561" />}
            >
              Newest first
            </Button>
          </Col>
          <Col>
            <InquiryAccordion inquiries={inquiries} />
          </Col> */}
        </Row>
      </Col>
    </Row>
  );
};

export default Inquiries;
