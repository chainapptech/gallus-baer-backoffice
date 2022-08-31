import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NotificationBadge from "../NotificationBadge";
import "./styles.scss";

const SidebarLink = ({ link }) => {
  const { pathname } = useLocation();
  const [isLinkActive, setIsLinkActive] = useState(false);

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

  return (
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
  );
};

export default SidebarLink;
