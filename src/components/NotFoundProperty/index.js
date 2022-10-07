import { Row, Col } from "react-bootstrap";
import Button from "../../components/Button";
import NotFoundPropertySvg from "../../stories/svg/NotFoundPropertySvg.js";
import "./styles.scss";

const NotFoundProperty = ({
  title,
  subtitle,
  buttonPrimary,
  buttonSecondary,
}) => (
  <Row>
    <Col
      md={12}
      className="p-4 d-flex flex-column align-items-center justify-content-center text-center not-found-property-wrapper"
    >
      <NotFoundPropertySvg />
      <h3 className="not-found-title">{title}</h3>
      <p className="not-found-subtitle">{subtitle}</p>
      <div className="d-flex flex-row-reverse">
        {buttonPrimary && <Button>{buttonPrimary}</Button>}
        {buttonSecondary && <Button type="text">{buttonSecondary}</Button>}
      </div>
    </Col>
  </Row>
);

export default NotFoundProperty;
