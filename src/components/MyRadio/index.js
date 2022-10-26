import { Form } from "react-bootstrap";
import "./styles.scss";

const MyRadio = (props) => {
  const { onChange, id, isSelected, label, value, name, className } = props;
  return (
    <div
      className={`d-flex align-items-center justify-content-start my-radio-wrapper ${className}`}
    >
      <Form.Check
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>
        <p className="ms-2">{label}</p>
      </label>
    </div>
  );
};

export default MyRadio;
