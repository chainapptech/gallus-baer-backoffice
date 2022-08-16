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
  search,
}) => (
  <Col className="input-wrapper d-flex flex-column">
    <h6 className="mb-1">{label}</h6>
    {type === "select" ? (
      <DropdownButton
        disabled={disabled}
        id="dropdown-basic-button"
        title="Eng"
      >
        <Dropdown.Item href="#">Eng</Dropdown.Item>
      </DropdownButton>
    ) : (
      <div className="d-flex position-relative">
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
