import { useState } from "react";
import { Col, Form, Offcanvas, Row } from "react-bootstrap";
import ProfileIcon from "components/ProfileIcon";
import "./styles.scss";
import Time from "stories/svg/Time";
import PropertyTag from "components/PropertyTag";
import CalendarDotted from "stories/svg/CalendarDotted";
import Phone from "stories/svg/Phone";
import Button from "components/Button";
import SendOutlined from "stories/svg/SendOutlined";
import Modal from "react-bootstrap/Modal";
import Checked from "stories/svg/Checked";

const selectOptions = ["Not answered", "Answered", "Assigned"];

const InquiriesTableRow = ({ inquiryItem }) => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [option, setOption] = useState("Not answered");

  const handleCloseButton = () => {
    if (option === "Not answered") {
      setShowCanvas(false);
    } else setShowModal(true);
  };

  const handleConfirmModal = () => {
    setShowCanvas(false);
    setShowModal(false);
  };

  return (
    <>
      <Offcanvas
        placement={"end"}
        show={showCanvas}
        onHide={handleCloseButton}
        style={{ width: "33%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-2 mb-2">
            Single Inquery
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <Row>
            <Col
              sm={12}
              md={12}
              className="d-flex align-items-center justify-content-start pt-3 pb-3"
            >
              <p>Property: </p>
              <p className="p-2 inquire-address">
                {inquiryItem.account.address}
              </p>
            </Col>
            <Col
              sm={12}
              md={12}
              className="d-flex align-items-center justify-content-start pt-3 pb-3"
            >
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="logo"
                  src={`assets/LogoImmoScout24.png`}
                  alt="Comparis"
                  width={"80px"}
                />
                <h5 className="ms-3 me-3 mb-0">Gallus baer</h5>
                <PropertyTag type={"inquiries"} className={"me-2 ms-4"}>
                  7 new
                </PropertyTag>
                <PropertyTag type={"inquiries"}>31 total</PropertyTag>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <div
                    className={`d-flex align-items-center justify-content-start info-canvas mb-1`}
                  >
                    <ProfileIcon
                      className={"profile-pict"}
                      name={inquiryItem.account.name}
                      surname={inquiryItem.account.surname}
                      image={inquiryItem.account.img}
                    />
                    <div>
                      <h5>
                        {inquiryItem.account.name} {inquiryItem.account.surname}
                      </h5>
                      <p className="small-text">
                        {inquiryItem.account.email &&
                          inquiryItem.account.email[0]}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="d-flex align-items-center mt-2">
                  <div className="d-flex align-items-center justify-content-start me-3">
                    <div className="me-2">
                      <Phone />
                    </div>
                    <p>{inquiryItem.time}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-start ms-1 me-3">
                    <div className="me-2">
                      <CalendarDotted />
                    </div>
                    <p>{inquiryItem.date}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-start ms-1">
                    <div className="me-2">
                      <Time />
                    </div>
                    <p>{inquiryItem.time}</p>
                  </div>
                </Col>
                {/* paragraf */}
                <Col md={12} className="info-canvas-description">
                  <p>
                    Etiam dictum nisi sed dui pretium facilisis. Sed nec nulla
                    ullamcorper, iaculis mi et, tincidunt urna. Aliquam eget
                    velit eget elit facilisis rhoncus quis at ligula. Curabitur
                    vitae feugiat neque. Suspendisse dapibus rutrum metus, id
                    malesuada nibh maximus accumsan. Proin condimentum metus
                    eget venenatis mollis.{" "}
                  </p>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col md={7} className="pe-0">
                      <Button
                        className={"single-inquiry-button"}
                        type="secondary"
                        leadingIcon={<CalendarDotted />}
                      >
                        Make an appointment
                      </Button>
                    </Col>
                    <Col md={5}>
                      <Button
                        className={"single-inquiry-button"}
                        leadingIcon={<SendOutlined fill="#EBD3BD" />}
                      >
                        Send mail
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col md={7} className="info-canvas-select">
                  <Form.Group>
                    <Form.Label className="m-0">
                      <h5 className="ms-2">Inquiry status</h5>
                    </Form.Label>
                    <Form.Select
                      className="mb-3"
                      value={option}
                      onChange={(e) => setOption(e.target.value)}
                    >
                      {selectOptions.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
      {/* MODAL */}

      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Answered inquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-share-property">
          <p className="mb-3">
            Did you answered to this inquiry? If confirmed, this inquiry will be
            stored on the Answered inquiries page.
          </p>
        </Modal.Body>
        <Modal.Footer className="m-0 p-0">
          <Button type="text" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirmModal}
            className="mt-2 mb-2 m-3"
            leadingIcon={<Checked fill="#EBD3BD" />}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <tr
        role="button"
        className="inquiries-table-row"
        onClick={() => setShowCanvas(true)}
      >
        <td>
          <div
            className={`d-flex align-items-center justify-content-start info`}
          >
            <ProfileIcon
              className={"profile-pict"}
              name={inquiryItem.account.name}
              surname={inquiryItem.account.surname}
              image={inquiryItem.account.img}
            />
            <div>
              <h5>
                {inquiryItem.account.name} {inquiryItem.account.surname}
              </h5>
              <p className="small-text">
                {inquiryItem.account.email && inquiryItem.account.email[0]}
              </p>
            </div>
          </div>
        </td>
        <td className="align-middle">
          <p className="p-2 inquire-address">{inquiryItem.account.address}</p>
        </td>
        <td className="align-middle">
          <div className="d-flex align-items-center justify-content-start">
            <div className="me-2">
              <CalendarDotted />
            </div>
            <p className="ms-1">{inquiryItem.date}</p>
          </div>
        </td>
        <td className="align-middle">
          <div className="d-flex align-items-center justify-content-start">
            <div className="me-2">
              <Time />
            </div>
            <p className="ms-1">{inquiryItem.time}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default InquiriesTableRow;
