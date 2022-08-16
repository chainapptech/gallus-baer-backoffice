import React from 'react';
import { Col } from 'react-bootstrap';

import Button from '../../components/Button';
import NotFoundPropertySvg from '../../stories/svg/NotFoundPropertySvg.js';
import './styles.scss';

const NotFoundProperty = ({
  title,
  subtitle,
  buttonPrimary,
  buttonSecondary,
}) => (
  <Col className="p-4 d-flex flex-column align-items-center text-center not-found-property ">
    <NotFoundPropertySvg />
    <h3 className="mt-2">{title}</h3>
    <p className="mb-4">{subtitle}</p>
    <div className="d-flex flex-row-reverse">
      {buttonPrimary && <Button>{buttonPrimary}</Button>}
      {buttonSecondary && <Button type="text">{buttonSecondary}</Button>}
    </div>
  </Col>
);

export default NotFoundProperty;
