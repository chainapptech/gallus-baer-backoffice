import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import "./styles.scss";

const MyCheckbox = ({
  checked,
  checkedState,
  setIsChecked,
  id,
  disabled,
  onChange,
  radio,
  label,
}) => {
  const handleOnChange = (e) => {
    if (e.target.id === "allServices") {
      let checkedClone = { ...checkedState };
      if (!checked) {
        Object.keys(checkedClone).forEach((key) => {
          checkedClone[key] = true;
        });
      } else {
        Object.keys(checkedClone).forEach((key) => {
          checkedClone[key] = false;
        });
      }
      setIsChecked(checkedClone);
    } else {
      setIsChecked((state) => ({
        ...state,
        [e.target.id]: !state[e.target.id],
      }));
    }
  };

  return (
    <div className="my-checkbox">
      {radio ? (
        <Form.Check
          disabled={disabled}
          type={`radio`}
          id={id ? id : `default-radio`}
          label={label}
          className="p-3"
        />
      ) : (
        <Form.Check
          disabled={disabled}
          checked={checked}
          type={`checkbox`}
          id={id ? id : `default-checkbox`}
          label={label}
          className="p-3"
          onChange={handleOnChange}
        />
      )}
    </div>
  );
};

export default MyCheckbox;
