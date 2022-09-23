import { useEffect, useState } from "react";

import NotificationBadge from "../../../components/NotificationBadge";
import "./styles.scss";

const SidebarLink = ({ link }) => {
  const [isLinkActive, setIsLinkActive] = useState(false);

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
