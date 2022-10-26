import { Container, Row, Col, Table } from "react-bootstrap";
import InquiriesTableRow from "components/InquiriesTableRow";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "components/Button";
import ArrowRight from "stories/svg/ArrowRight";
import useWindowSize from "lib/useWindowSize";

const InquiryTable = ({ inquiries }) => {
  const size = useWindowSize();

  return (
    <Container fluid className="ps-0 pe-0 inquiry-table-wrapper">
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
              <h6>Portal name</h6>
            </th>
            <th>
              <h6>Date</h6>
            </th>
            <th>
              <h6>Time</h6>
            </th>
          </tr>
        </thead>
        <tbody>
          {inquiries?.map((item) => (
            <InquiriesTableRow key={item?.account?.email} inquiryItem={item} />
          ))}
        </tbody>
      </Table>

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
    </Container>
  );
};

export default InquiryTable;
