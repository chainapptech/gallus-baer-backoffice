import { useEffect, useState } from "react";
import { Row, Col, Card, Modal, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { numberWithCommas } from "utils/numberWithCommas";
import PropertyTag from "../PropertyTag";
import IconButton from "../IconButton";
import ProfileIcon from "../ProfileIcon";
import Button from "components/Button";

import PropertyActions from "./PropertyActions";
import Dots from "stories/svg/Dots";
import OutlineHeart from "../../stories/svg/OutlineHeart";
import Checked from "stories/svg/Checked";
import "./styles.scss";
import agentsData from "./agents.json";

const PropertyCard = ({
  property,
  user,
  id,
  waitingForApproval,
  visibleLink,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [disableLink, setDisableLink] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [agents, setAgents] = useState(null);

  const [isHoveredModalItem, setIsHoveredModalItem] = useState(false);

  useEffect(() => {
    setAgents(agentsData);
  }, []);

  const handleClose = () => {
    setDisableLink(true);
    setShowModal(false);
  };
  const handleShow = () => {
    setDisableLink(true);
    setShowModal(true);
  };

  const handleClick = () => {
    if (openDropDown === true) setOpenDropDown(false);
    else setOpenDropDown(true);
  };

  return (
    <Card className="property-card h-100">
      <Link
        style={{ pointerEvents: visibleLink === false && "none" }}
        to={disableLink && `/properties/${id}`}
      >
        <Card.Body className="position-relative">
          <IconButton
            className={"favourite-property-icon"}
            icon={<OutlineHeart fill={isFavourite} />}
            size={"sm"}
            onClick={() => setIsFavourite((state) => !state)}
            onMouseEnter={() => setDisableLink(false)}
            onMouseLeave={() => setDisableLink(true)}
          />
          {property.images[0] ? (
            <Card.Img variant="top" src={`/assets/${property.images[0]}`} />
          ) : (
            <Card.Img variant="top" src={`assets/no-property.png`} />
          )}
          <Row className="mt-3 mb-3 ms-2 me-2">
            <Col
              md={10}
              className="d-flex align-items-start justify-content-between"
            >
              <h4>CHF {numberWithCommas(property.price)}.00</h4>
            </Col>
            {waitingForApproval && (
              <Col
                md={2}
                className="d-flex align-items-center justify-content-center"
                onClick={handleClick}
                onMouseEnter={() => setDisableLink(false)}
                onMouseLeave={() => setDisableLink(true)}
              >
                <Dots />
                {openDropDown && (
                  <PropertyActions
                    handleShow={handleShow}
                    setDisableLink={setDisableLink}
                    openDropDown={openDropDown}
                  />
                )}
              </Col>
            )}

            <Col md={12}>
              <p className="small-text opacity-75">
                CHF {numberWithCommas(property["previous-price"])}.00
              </p>
            </Col>
            <Col md={12} className="mt-2 ms-2">
              <Row>
                {property.tags.map((tag) => (
                  <PropertyTag key={tag} className={"me-2"}>
                    {tag}
                  </PropertyTag>
                ))}
              </Row>
              {waitingForApproval && (
                <Row className="mt-2">
                  <PropertyTag type={waitingForApproval}>
                    {waitingForApproval}
                  </PropertyTag>
                </Row>
              )}
            </Col>
            <Col md={12}>
              <p className="property-address">
                {property.address.length < 30
                  ? property.address
                  : `${property.address.slice(0, 30)}...`}
              </p>
            </Col>
            <hr />
            <Row>
              <Col className="d-flex profile-icon-property-card">
                <ProfileIcon
                  name={user.name}
                  surname={user.surname}
                  image={user.img || img}
                  size="md"
                />
                <p className="user-name-surname d-flex align-items-center">
                  {user.name} {user.surname}
                </p>
              </Col>
            </Row>
          </Row>
        </Card.Body>
      </Link>
      {/* Modal - assign to agent */}
      <Modal centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign to agent</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-share-property">
          <Container fluid className="p-0 m-0 container-modal-assign-to-agent">
            <Row className="g-2 pt-3 pb-3 ps-1 pe-1">
              {agents?.map((item) => (
                <Col
                  md={12}
                  className="pt-2 pb-2 d-flex align-items-center justify-content-start modal-hovered"
                  // onMouseEnter={() => setIsHoveredModalItem(true)}
                  // onMouseLeave={() => setIsHoveredModalItem(false)}
                >
                  <ProfileIcon image={item?.account?.img} className={"ms-3"} />
                  <p className="ms-2">{`${item?.account?.name} ${item?.account?.surname}`}</p>
                </Col>
              ))}
            </Row>
          </Container>
          {/* <Row>
            <Col md={12}>
              <ProfileIcon name={"Nikola"} />
            </Col>
            <Col md={12}>
              <ProfileIcon name={"Nikola"} />
            </Col>
          </Row> */}
        </Modal.Body>
        <Modal.Footer className="m-0 p-0">
          <Button
            type="text"
            onClick={handleClose}
            onMouseEnter={() => setDisableLink(false)}
            onMouseLeave={() => setDisableLink(true)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            className="mt-2 mb-2 m-3"
            leadingIcon={<Checked fill="#EBD3BD" />}
            onMouseEnter={() => setDisableLink(false)}
            onMouseLeave={() => setDisableLink(true)}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal */}
    </Card>
  );
};

export default PropertyCard;
