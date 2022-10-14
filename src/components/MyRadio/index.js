import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import "./styles.scss";

const MyRadio = ({ checked, name, disabled, label, id, onChange }) => {
  return (
    <div className="d-flex align-items-center justify-content-start my-radio-wrapper">
      <Form.Check
        name={name}
        checked={checked}
        disabled={disabled}
        type={`radio`}
        id={id ? id : `default-radio`}
        label={label}
        onChange={onChange}
      />
      {/* <p>{label}</p> */}
    </div>
  );
};

export default MyRadio;
