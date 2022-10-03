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
  // const [isChecked, setIsChecked] = useState(false);

  // useEffect(() => {
  //   if (!checked) setIsChecked(false);
  //   else setIsChecked(true);
  // }, [checked]);

  // const [isChecked, setIsChecked] = useState(checked);

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
      const { allServices, ...rest } = checkedState;
      let checkedClone = { ...rest };
      const isAllChecked = Object.values(checkedClone).includes(false);
      
      // console.log(checkedClone);
      setIsChecked((state) => ({
        ...state,
        allServices: isAllChecked ? true : false,
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
      {/* <input
        type="checkbox"
        id=""
        disabled={disabled}
        value="Paneer"
        checked={isChecked}
        onChange={handleOnChange}
        className={`p-3 form-check-input ${
          isChecked && "form-check-input:checked"
        } ${disabled && "form-check-input:disabled"}`}
      /> */}
    </div>
  );
};

export default MyCheckbox;
