import React, { useState } from "react";
import {
  Offcanvas,
  Navbar,
  Nav,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "lib/contextLib";
import NotificationsOutline from "../../stories/svg/NotificationsOutline";
import ProfileIcon from "../ProfileIcon";
//icons
import HouseOutline from "../../stories/svg/HouseOutline";
import HouseFill from "../../stories/svg/HouseFill";
// import PeopleOutline from "stories/svg/PeopleOutline";
// import PeopleFill from "stories/svg/PeopleFill";
import DocumentOutline from "stories/svg/DocumentOutline";
import DocumentFill from "stories/svg/DocumentFill";
import PropertiesOutline from "stories/svg/PropertiesOutline";
import PropertiesFill from "stories/svg/PropertiesFill";
import { BsPeople, BsPeopleFill } from "react-icons/bs"; // error with PeopleOutline icon

import "./styles.scss";

const Header = ({ name, surname }) => {
  const { setAuthenticated } = useAppContext();
  const [show, setShow] = useState(false);

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  const logoutHandler = () => {
    setAuthenticated(false);
    nav("/");
  };

  const links = [
    {
      text: "Home",
      path: "/",
      icon: <HouseOutline />,
      active_icon: <HouseFill />,
    },
    {
      text: "Accounts",
      path: "/accounts",
      icon: <BsPeople />,
      active_icon: <BsPeopleFill />,
    },
    {
      text: "Inquiries",
      path: "/inquiries",
      icon: <DocumentOutline />,
      active_icon: <DocumentFill />,
    },
    {
      text: "Properties",
      path: "/properties",
      icon: <PropertiesOutline />,
      active_icon: <PropertiesFill />,
    },
  ];

  return (
    <>
      <Navbar
        collapseonselect="true"
        bg="light"
        expand={"md"}
        className="fixed-top"
      >

        <Container fluid>
          <Navbar.Brand href="#">
            <img src="assets/logo.png" alt="logo" width={"166px"} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            onClick={toggleOffCanvas}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            collapseonselect="true"
            show={show}
            onHide={toggleOffCanvas}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img src="assets/logo.png" alt="logo" width={"166px"} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 align-items-md-center pe-3">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    className="mb-4 py-2 px-3 sidebar-links d-block d-md-none"
                    to={`${link.path}`}
                    onClick={toggleOffCanvas}
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                ))}

                <DropdownButton
                  className="d-flex language-selector me-4 d-none d-md-block"
                  id="dropdown-basic-button"
                  title={<h5 className="mb-0">Eng</h5>}
                >
                  <Dropdown.Item href="#/action-1">
                    <h5 className="language-item">Eng</h5>
                  </Dropdown.Item>
                </DropdownButton>

                <NotificationsOutline className="notification-outline-svg me-4 d-none d-md-block" />

                <Dropdown className="profile-dropdown">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="profile-toggle"
                  >
                    <ProfileIcon
                      name={name}
                      surname={surname}
                      size="md"
                      className={"ms-3 ms-md-0"}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="profile-dropwdown-menu">
                    <Dropdown.Item as="button" onClick={logoutHandler}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
