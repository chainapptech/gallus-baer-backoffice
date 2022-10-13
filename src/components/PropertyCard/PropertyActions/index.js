import { Col, Row } from "react-bootstrap";
import Approved from "stories/svg/Approved";
import Declined from "stories/svg/Declined";
import Plus from "stories/svg/Plus";
// import "./styles.scss";

const PropertyActions = ({ handleShow, setDisableLink }) => {
  return (
    <Row
      className="pt-2 pb-2 ps-3 pe-3 position-absolute d-flex flex-column actions-wrapper"
      onClick={() => setDisableLink(true)}
    >
      <Col className="pt-2 pb-2 ps-0 d-flex align-items-center justify-content-start">
        <Approved />
        <p className="ms-2">Approve property</p>
      </Col>
      <Col className="pt-2 pb-2 ps-0 d-flex align-items-center justify-content-start">
        <Declined />
        <p className="ms-2">Decline property</p>
      </Col>
      <Col
        onClick={handleShow}
        className="pt-2 pb-2 ps-0 d-flex align-items-center justify-content-start"
      >
        <Plus fill="#BC7B4A" />
        <p className="ms-2">Assign to agent</p>
      </Col>
    </Row>
  );
};

export default PropertyActions;
