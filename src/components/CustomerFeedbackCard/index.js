import { Card } from "react-bootstrap";
import ProfileIcon from "components/ProfileIcon";
import CalendarPopluated from "stories/svg/CalendarPopulated";
import ClockOutline from "stories/svg/ClockOutline";
import Phone from "stories/svg/Phone";

import "./styles.scss";

const CustomerFeedbackCard = ({ feedback }) => {
  return (
    <Card className="customer-feedback">
      <div className="customer-feedback-card">
        <div className="d-flex align-items-center">
          <ProfileIcon
            name={feedback?.account?.name}
            surname={feedback?.account?.surname}
            image={feedback?.account?.img}
          />

          <div className="d-flex flex-column ms-4">
            <h4>
              {feedback?.account?.name} {feedback?.account?.surname}
            </h4>
            <p className="link">{feedback?.account?.email[0]}</p>
          </div>
        </div>

        <div className="d-flex my-3">
          <div className="d-flex align-items-center">
            <Phone />
            <p className="ms-2">{feedback?.account?.phone[0]}</p>
          </div>
          <div className="ms-3 d-flex align-items-center">
            <CalendarPopluated />
            <p className="ms-2">{feedback?.date}</p>
          </div>

          <div className="d-flex align-items-center ms-3">
            <ClockOutline />
            <p className="ms-2">{feedback?.time}</p>
          </div>
        </div>

        <p>{feedback?.message}</p>
      </div>
    </Card>
  );
};

export default CustomerFeedbackCard;
