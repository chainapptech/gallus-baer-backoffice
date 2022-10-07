import { Badge } from "react-bootstrap";
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
            className="d-flex align-items-center status-label status-label-success"
          >
            <CheckedColor />
            <p>Success</p>
          </Badge>
        );
      case 2:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-inProgress"
          >
            <BlueClock />
            <p>In progress</p>
          </Badge>
        );
      case 3:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-notStarted"
          >
            <Pause />
            <p>Not started</p>
          </Badge>
        );
      case 4:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-warningLabel"
          >
            <Warning />
            <p>Warning</p>
          </Badge>
        );
      case 5:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-errorLabel"
          >
            <Danger />
            <p>Error</p>
          </Badge>
        );
      case 6:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-publishedLabel"
          >
            <CheckedColor />
            <p>Published</p>
          </Badge>
        );
      case 7:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-notPublishedLabel"
          >
            <Pause />
            <p>Not published</p>
          </Badge>
        );
      case 8:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-pending"
          >
            <BlueClock />
            <p>Pending</p>
          </Badge>
        );
      case 9:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-paid"
          >
            <CheckedColor />
            <p>Paid</p>
          </Badge>
        );
      case 10:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-not-paid"
          >
            <Danger />
            <p>Not paid</p>
          </Badge>
        );
      default:
        return (
          <Badge
            bg="none"
            className="d-flex align-items-center status-label status-label-inProgress"
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
