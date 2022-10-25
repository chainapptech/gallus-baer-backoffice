import { useState } from "react";

import Button from "../Button";
import ProfileIcon from "../ProfileIcon";
import AccountLabel from "../AccountLabel";
import Dots from "../../stories/svg/Dots";
import Phone from "../../stories/svg/Phone";
import Calendar from "../../stories/svg/Calendar";
import CalendarPopluated from "../../stories/svg/CalendarPopulated";
import PaperPlaneOutline from "../../stories/svg/PaperPlaneOutline";
import IconButton from "../IconButton";
import "./styles.scss";

const SingleAccount = ({ user, hover, image, table }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e) =>
    e.type === "mouseenter" ? setIsHovered(true) : setIsHovered(false);

  const accountTypeHandler = () =>
    !table ? (
      <>
        <IconButton className={"no-table-svg-icon"} icon={<Phone />} />
        <IconButton
          className={"no-table-svg-icon"}
          icon={<PaperPlaneOutline />}
        />
        <IconButton className={"no-table-svg-icon"} icon={<Calendar />} />
      </>
    ) : (
      <>
        <Button leadingIcon={<CalendarPopluated />} type="text">
          Make an appointment
        </Button>
        <Button leadingIcon={<PaperPlaneOutline />} type="text">
          Send Email
        </Button>
      </>
    );

  return (
    <div
      className={`account d-flex align-items-center justify-content-start`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <ProfileIcon
        name={user?.name}
        surname={user?.surname}
        image={user?.img || image}
      />
      <div className="info flex-fill ms-4">
        <h5>
          {user?.name} {user?.surname}
        </h5>
        {table === true ? (
          <h6 className="small-text light-color user-email">
            {user?.email[0]}
          </h6>
        ) : (
          <p className="small-text light-color">{user?.email}</p>
        )}
      </div>
      <div className="label">
        {isHovered || hover ? (
          accountTypeHandler()
        ) : (
          <AccountLabel role={user?.role} />
        )}
        {table === true ? (
          <IconButton icon={<Dots />} />
        ) : (
          <IconButton className={"no-table-svg-icon"} icon={<Dots />} />
        )}
      </div>
    </div>
  );
};

export default SingleAccount;
