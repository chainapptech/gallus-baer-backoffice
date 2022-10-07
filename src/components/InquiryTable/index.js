import { Row, Col, Table, Accordion } from "react-bootstrap";
import InquiriesTableRow from "components/InquiriesTableRow";
import { Link } from "react-router-dom";
import "./styles.scss";
import PropertyTag from "components/PropertyTag";
import Button from "components/Button";
import ArrowRight from "stories/svg/ArrowRight";
import ArrowDown from "stories/svg/ArrowDown";
import InquiryCard from "components/InquiryCard";
import useWindowSize from "lib/useWindowSize";

const InquiryTable = ({ inquiries }) => {
  const size = useWindowSize();

  return (
    <Accordion className="accordion-wrapper">
      {inquiries?.map((item) => (
        <Accordion.Item key={item?.id} eventKey={item?.id}>
          <Accordion.Header>
            <img
              className="logo d-none d-md-block"
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
            <PropertyTag type={"inquiries"} className={"d-none d-md-block"}>
              31 total
            </PropertyTag>
          </Accordion.Header>
          <Accordion.Body>
            {size?.width < 576 ? (
              <>
                <InquiryCard />
                <InquiryCard />
                <InquiryCard />
              </>
            ) : (
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
                      key={inquiryItem?.account?.email}
                      inquiryItem={inquiryItem}
                    />
                  ))}
                </tbody>
              </Table>
            )}
            <Row>
              <Col className="d-flex align-items-center justify-content-end">
                <div>
                  <Link to={"/single-inquiry"}>
                    <Button type="text" endIcon={<ArrowRight fill="#063561" />}>
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
  );
};

export default InquiryTable;
