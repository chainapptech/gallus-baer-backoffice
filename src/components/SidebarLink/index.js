import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotificationBadge from "../NotificationBadge";
import "./styles.scss";

const SidebarLink = ({ link }) => {
  const { pathname } = useLocation();
  const [isLinkActive, setIsLinkActive] = useState(false);
  const [isSublinkActive, setIsSublinkActive] = useState(false);

  useEffect(() => {
    if (pathname.substring(1).indexOf("/") > 0) {
      if (
        pathname.substring(0, pathname.substring(1).indexOf("/") + 1) ===
        link.path
      ) {
        setIsLinkActive(true);
      } else {
        setIsLinkActive(false);
      }
    } else {
      if (pathname === link.path) {
        setIsLinkActive(true);
      } else {
        setIsLinkActive(false);
      }
    }
  }, [pathname]);

  return link.sub_links.length > 0 ? (
    <Accordion className="sidebar-accordion mb-2">
      <Accordion.Item eventKey="0">
        <Accordion.Header
          className={`pe-3`}
        >
          <button
            className={`d-flex px-3 sidebar-links`}
          >
            <div className="d-flex justify-content-between align-items-center inner-button">
              <div className="d-flex align-items-center">
                {link.icon}
                <p className="mb-0 link-text">{link.text}</p>
              </div>
              {link.notificationNumber > 0 ? (
                <NotificationBadge number={link.notificationNumber} />
              ) : (
                <></>
              )}
            </div>
          </button>
        </Accordion.Header>
        <Accordion.Body className="px-0">
          {link.sub_links.map((subLink, index)=>(
          <Link key={index} to={`${subLink.path}`}>
          <button
            className={`d-flex px-3 mb-2 sidebar-links ${
              pathname===subLink.path && "active-link"
            }`}
          >
            <div className="d-flex justify-content-between align-items-center inner-button">
                <p className="ps-4 mb-0 link-text">{subLink.text}</p>
              {subLink.notificationNumber > 0 ? (
                <NotificationBadge number={subLink.notificationNumber} />
              ) : (
                <></>
              )}
            </div>
          </button>
          </Link>
           ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ) : (
    <Link to={`${link.path}`}>
    <button
      className={`d-flex mb-2 px-3 sidebar-links ${
        isLinkActive && "active-link"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center inner-button">
        <div className="d-flex align-items-center">
          {isLinkActive ? link.active_icon : link.icon}
          <p className="mb-0 link-text">{link.text}</p>
        </div>
        {link.notificationNumber > 0 ? (
          <NotificationBadge number={link.notificationNumber} />
        ) : (
          <></>
        )}
      </div>
    </button>
    </Link>
  );
};

export default SidebarLink;
