import React, { useState } from "react";
import NotificationBadge from "../NotificationBadge";

import "./styles.scss";

const SidebarLink = ({ link, notificationNumber }) => {
  const [showFillIcon, setShowFillIcon] = useState(false);

  function showFillIconHandler() {
    setShowFillIcon(true);
  }

  function hideFillIconHandler() {
    setShowFillIcon(false);
  }

  return (
    <button
      onMouseDown={showFillIconHandler}
      onMouseUp={hideFillIconHandler}
      className="d-flex mb-4 py-2 px-3 sidebar-links"
    >
      <div className="d-flex justify-content-between align-items-center inner-button">
        <div className="d-flex align-items-center">
          {showFillIcon ? link.active_icon : link.icon}
          <p className="mb-0 link-text">{link.text}</p>
        </div>
        {notificationNumber > 0 ? (
          <NotificationBadge number={notificationNumber} />
        ) : (
          <></>
        )}
      </div>
    </button>
  );
};

export default SidebarLink;
