import { Row, Col, Table, Accordion } from "react-bootstrap";
import InquiriesTableRow from "components/InquiriesTableRow";
import { Link } from "react-router-dom";
import "./styles.scss";
import PropertyTag from "components/PropertyTag";
import inquiries from "./inqueries-data.json";
import Button from "components/Button";
import ArrowRight from "stories/svg/ArrowRight";
import ArrowDown from "stories/svg/ArrowDown";

const Inquiries = () => {
  return (
    <Row className="inquires-wrapper">
      <Col sm={12} md={12}>
        <Row>
          <Col sm={12} md={12}>
            <h2 className="title-inquires">Inquiries</h2>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-end"
            sm={12}
            md={12}
          >
            <Button type="text" endIcon={<ArrowDown fill="#063561" />}>
              Newest first
            </Button>
          </Col>
          <Col>
            <Accordion>
              {inquiries.map((item) => (
                <Accordion.Item key={item?.id} eventKey={item?.id}>
                  <Accordion.Header>
                    <img
                      className="logo"
                      src={`assets/${item?.logo}`}
                      alt="Comparis"
                      width={"80px"}
                    />
                    <div className="descr">
                      <h5>{item?.companyName}</h5>
                    </div>
                    <PropertyTag type={"inquiries"} className={"me-2"}>
                      7 new
                    </PropertyTag>
                    <PropertyTag type={"inquiries"}>31 total</PropertyTag>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>
                            <h6>User name & email adress</h6>
                          </th>
                          <th>
                            <h6>Property name</h6>
                          </th>
                          <th>
                            <h6>Date name</h6>
                          </th>
                          <th>
                            <h6>Time</h6>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item?.inquiry?.map((inquiryItem) => (
                          <InquiriesTableRow
                            key={inquiryItem.account.email}
                            inquiryItem={inquiryItem}
                          />
                        ))}
                      </tbody>
                    </Table>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-end">
                        <div>
                          <Link to={"/singleportal"}>
                            <Button
                              type="text"
                              endIcon={<ArrowRight fill="#063561" />}
                            >
                              View all
                            </Button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Inquiries;
