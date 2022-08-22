import { FormControl, InputGroup } from "react-bootstrap";
import MagnifyingGlass from "stories/svg/MagnifyingGlass";
import "./styles.scss";

const SearchInput = ({ placeholder, className, onChange }) => {
  return (
    <InputGroup className="d-flex align-items-center ps-3 bg-white rounded-1 border border-1 border-grey">
      <MagnifyingGlass fill="#000" scale={0.8} />
      <FormControl
        placeholder={placeholder}
        className={`border-0 bg-transparent shadow-none custom ${className}`}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default SearchInput;
