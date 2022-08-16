import React, { useEffect } from 'react';
import { Badge } from 'react-bootstrap';

import './styles.scss';

const PropertyTag = ({ children }) => {
  return (
    <Badge className="property-tag" bg="primary">
      <p className="small-text">{children}</p>
    </Badge>
  );
};

export default PropertyTag;
