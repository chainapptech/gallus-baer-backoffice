import { Col, Row } from "react-bootstrap";
import Danger from "stories/svg/Danger";
import Plus from "stories/svg/Plus";

const PropertyActions = () => {
  return (
    <Col className="position-absolute bg-white d-flex flex-column actions-wrapper">
      <div className="d-flex align-items-center justify-contnet-between mb-3">
        <Plus className="me-3" fill="#2C3136" />
        <p>Approve property</p>
      </div>
      <div className="d-flex align-items-center justify-contnet-between">
        <Danger className="me-3" />
        <p>Decline property</p>
      </div>
    </Col>
  );
};

export default PropertyActions;
