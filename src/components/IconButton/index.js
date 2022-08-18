import React from "react";
import AddOutline from "../../stories/svg/AddOutline";
import "./styles.scss";

const IconButton = ({ size, disabled, icon, className, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn-add-button btn-add-button-${size} rounded-circle d-flex align-items-center justify-content-center ${className}`}
    >
      {icon}
    </button>
  );
};

IconButton.defaultProps = {
  size: "lg",
  disabled: false,
  icon: <AddOutline />,
};

export default IconButton;
