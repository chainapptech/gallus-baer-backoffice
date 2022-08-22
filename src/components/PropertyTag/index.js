import { Badge } from "react-bootstrap";

import "./styles.scss";

const PropertyTag = ({ children }) => {
  return (
    <Badge className="property-tag" pill bg="primary">
      <p>{children}</p>
    </Badge>
  );
};

export default PropertyTag;
