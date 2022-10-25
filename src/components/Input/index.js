import React from "react";
import { Col, DropdownButton, Dropdown } from "react-bootstrap";

import MagnifyingGlass from "../../stories/svg/MagnifyingGlass";
import Button from "../Button";
import "./styles.scss";

const InputComponent = ({
  type,
  name,
  label,
  disabled,
  onChange,
  placeholder,
  title,
  search,
}) => (
  <Col className="input-wrapper d-flex flex-column">
    {label && <h5 className="mb-2 ms-2">{label}</h5>}
    {type === "select" ? (
      <DropdownButton
        disabled={disabled}
        id="dropdown-basic-button"
        title={title ? <h5>{title}</h5> : "Eng"}
      >
        <Dropdown.Item href="#">0</Dropdown.Item>
      </DropdownButton>
    ) : (
      <div className="d-flex align-items-center justify-content-center position-relative">
        <input
          id={name}
          type={type}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          className="px-3 py-2 rounded"
        />
        {type === "search" && (
          <Button
            leadingIcon={<MagnifyingGlass className="add-outline-svg" />}
            className="position-absolute end-0"
          >
            Search
          </Button>
        )}
      </div>
    )}
  </Col>
);

export default InputComponent;
