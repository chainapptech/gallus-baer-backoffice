import React from "react";
import { Auth } from "aws-amplify";
import { useNavigate, Link } from "react-router-dom";
import { Col, Nav } from "react-bootstrap";
import SidebarLink from "components/SidebarLink";
//icons
import HouseOutline from "../../stories/svg/HouseOutline";
import HouseFill from "../../stories/svg/HouseFill";
import DocumentOutline from "stories/svg/DocumentOutline";
import DocumentFill from "stories/svg/DocumentFill";
import PropertiesOutline from "stories/svg/PropertiesOutline";
import PropertiesFill from "stories/svg/PropertiesFill";
import AccountsOutline from "stories/svg/AccountsOutline";
import AccountsFill from "stories/svg/AccountsFill";

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
      icon: <AccountsOutline />,
      active_icon: <AccountsFill />,
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
    <Col
      sm={12}
      md={2}
      className="mt-4 pt-4 px-0 min-vh-100 sidebar d-none d-md-block"
    >
      <Nav
        fixed="top"
        defaultActiveKey="/home"
        className="flex-column mt-4 pt-4 "
      >
        <p className="ms-4 mb-4">WELCOME, LUCIA</p>
        {links.map((link, index) => (
          <Link key={index} to={`${link.path}`}>
            <SidebarLink link={link} notificationNumber={0} />
          </Link>
        ))}
      </Nav>
    </Col>
  );
};

export default Sidebar;
