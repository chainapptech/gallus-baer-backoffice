import React, { useEffect } from "react";
import {
  Navbar,
  Col,
  Row,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import NotificationsOutline from "../../stories/svg/NotificationsOutline";
import ProfileIcon from "../ProfileIcon";
import "./styles.scss";

const Header = ({ name, surname }) => {
  return (
    <Navbar fixed="top" expand="lg" variant="light" bg="light">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="assets/logo.png" alt="logo" width={"20%"} />
        </Navbar.Brand>
        <Row className="d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <DropdownButton
              className="d-flex language-selector me-4"
              id="dropdown-basic-button"
              title="Eng"
            >
              <Dropdown.Item href="#/action-1">
                <h5 className="language-item">Eng</h5>
              </Dropdown.Item>
            </DropdownButton>
            <NotificationsOutline className="notification-outline-svg" />
          </Col>
          <Col>
            <ProfileIcon name={name} surname={surname} size="md" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default Header;
