import { useEffect, useState } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import newInquiries from "./new-inqueries-data-table.json";
import InquiryTable from "components/InquiryTable";
import "./styles.scss";
import { useAppContext } from "lib/contextLib";
import Button from "components/Button";
import ArrowDown from "stories/svg/ArrowDown";

const Inquiries = () => {
  const { selectedTabInquiries, setSelectedTabInquiries } = useAppContext();

  const [inquiries, setInquiries] = useState(null);

  useEffect(() => {
    setInquiries(newInquiries);
  }, []);

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
              activeKey={selectedTabInquiries}
              onSelect={(tab) => setSelectedTabInquiries(tab)}
              className="mb-4"
            >
              <Tab
                eventKey="new-inquiries"
                title="New inquiries"
                tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
              >
                <Row>
                  <Col
                    className="d-flex align-items-center justify-content-end"
                    sm={12}
                    md={10}
                  >
                    <Button
                      className={"mb-2"}
                      type="text"
                      endIcon={<ArrowDown fill="#063561" />}
                    >
                      Newest first
                    </Button>
                  </Col>
                  <Col md={10}>
                    <InquiryTable inquiries={newInquiries} />
                  </Col>
                </Row>
              </Tab>
              <Tab
                eventKey="answered-inquiries"
                title="Answered inquiries"
                tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
              >
                <Row>
                  <Col
                    className="d-flex align-items-center justify-content-end"
                    sm={12}
                    md={10}
                  >
                    <Button
                      className={"mb-2"}
                      type="text"
                      endIcon={<ArrowDown fill="#063561" />}
                    >
                      Newest first
                    </Button>
                  </Col>
                  <Col md={10}>
                    <InquiryTable inquiries={inquiries} />
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Inquiries;
