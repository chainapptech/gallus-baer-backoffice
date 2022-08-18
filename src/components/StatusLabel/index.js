import { Col, Badge } from "react-bootstrap";
import BlueClock from "stories/svg/BlueClock";
import CheckedColor from "stories/svg/CheckedColor";
import Danger from "stories/svg/Danger";
import Pause from "stories/svg/Pause";
import Warning from "stories/svg/Warning";

import "./styles.scss";

const StatusLabel = ({ status }) => {
  const labelTypeHandler = (status) => {
    switch (status) {
      case 1:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label success"
          >
            <CheckedColor />
            <p>Success</p>
          </Badge>
        );
      case 2:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label inProgress"
          >
            <BlueClock />
            <p>In progress</p>
          </Badge>
        );
      case 3:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label notStarted"
          >
            <Pause />
            <p>Not started</p>
          </Badge>
        );
      case 4:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label warningLabel"
          >
            <Warning />
            <p>Warning</p>
          </Badge>
        );
      case 5:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label errorLabel"
          >
            <Danger />
            <p>Error</p>
          </Badge>
        );
      default:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label inProgress"
          >
            <BlueClock />
            <p>In progress</p>
          </Badge>
        );
    }
  };
  return <>{labelTypeHandler(status)}</>;
};

export default StatusLabel;
