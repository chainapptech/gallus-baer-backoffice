import React from "react";
import { Auth } from "aws-amplify";
import { useNavigate, Link } from "react-router-dom";
import { Col, Container, Nav } from "react-bootstrap";
import SidebarLink from "components/SidebarLink";
import { BsArrowBarLeft } from "react-icons/bs";

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

import { useAppContext } from "../../lib/contextLib";

import "./styles.scss";

const Sidebar = () => {
  const { userHasAuthenticated } = useAppContext();
  const nav = useNavigate();

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
    nav("/login");
  }

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
      notificationNumber: 3,
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
      notificationNumber: 9,
    },
  ];

  return (
    <>
      <Col
        sm={12}
        md={2}
        className="mt-4 pt-4 ps-0 min-vh-100 sidebar d-none d-md-block"
      >
        <Nav
          fixed="top"
          defaultActiveKey="/home"
          className="flex-column mt-4 pt-4 position-fixed"
        >
          {links.map((link, index) => (
            <Link key={index} to={`${link.path}`}>
              <SidebarLink link={link} notificationNumber={0} />
            </Link>
          ))}
        </Nav>
      </Col>
    </>
  );
};

export default Sidebar;
