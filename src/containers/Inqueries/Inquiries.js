import { Row, Col, Table, Accordion } from "react-bootstrap";
import InquiriesTableRow from "components/InquiriesTableRow";
import { Link } from "react-router-dom";
import "./styles.scss";
import PropertyTag from "components/PropertyTag";
import inquiries from "./inqueries-data.json";
import Button from "components/Button";
import ArrowRight from "stories/svg/ArrowRight";
import ArrowDown from "stories/svg/ArrowDown";
import InquiryCard from "components/InquiryCard";
import useWindowSize from "lib/useWindowSize";
import InquiryAccordion from "components/InquiryAccordion";

const table = (item) => {
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
  </Table>;
};

const Inquiries = () => {
  const size = useWindowSize();

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
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Inquiries;
