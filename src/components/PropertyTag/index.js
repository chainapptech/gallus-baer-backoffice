import { Badge } from "react-bootstrap";

import "./styles.scss";

const PropertyTag = ({ children, type, className }) => {
  return (
    <Badge
      className={`property-tag property-tag-${type} ${className}`}
      pill
      bg="primary"
    >
      <p className={`text-${type}`}>{`${children
        .charAt(0)
        .toUpperCase()}${children.slice(1)}`}</p>
    </Badge>
  );
};

export default PropertyTag;
