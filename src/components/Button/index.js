import React, { useEffect } from "react";
import FilledArrowDown from "../../stories/svg/FilledArrowDown";
import AddOutline from "../../stories/svg/AddOutline";
import "./styles.scss";
import NotificationBadge from "components/NotificationBadge";

const Button = ({
  children,
  notificationNumber,
  leadingIcon,
  endIcon,
  type,
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-variant-${type} ${className}  d-flex align-items-center justify-content-center gx-2`}
    >
      {leadingIcon !== true ? (
        leadingIcon
      ) : (
        <AddOutline className="add-outline-svg" />
      )}
      <h5 className="mb-0">{children}</h5>
      <NotificationBadge
        className={"button-notification"}
        number={notificationNumber}
      />
      {endIcon}
    </button>
  );
};

Button.defaultProps = {
  children: "Button",
  notificationNumber: 0,
  type: "primary",
  leadingIcon: false,
  endIcon: false,
  disabled: false,
};

export default Button;
