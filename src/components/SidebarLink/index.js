import { useLocation } from "react-router-dom";

import NotificationBadge from "../NotificationBadge";
import "./styles.scss";

const SidebarLink = ({ link }) => {
  const { pathname } = useLocation();
  const isLinkActive = pathname === link.path;

  return (
    <button
      className={`d-flex mb-4 py-2 px-3 sidebar-links ${
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
