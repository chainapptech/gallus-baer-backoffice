import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import ProfileIcon from "components/ProfileIcon";
import InquiriesCard from "components/InquiriesCard";
import "./styles.scss";
import Calendar from "stories/svg/Calendar";
import Time from "stories/svg/Time";

const InquiriesTableRow = ({
  name,
  surname,
  img,
  email,
  address,
  date,
  time,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas
        style={{ width: "40%" }}
        placement={"end"}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Single Inquery</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <InquiriesCard
            name={name}
            surname={surname}
            email={email}
            address={address}
            date={date}
            time={time}
          />
        </Offcanvas.Body>
      </Offcanvas>
      <tr role="button" className="inquiries-table-row" onClick={handleShow}>
        <td>
          <div
            className={`d-flex align-items-center justify-content-start info`}
          >
            <ProfileIcon
              className={"profile-pict"}
              name={name}
              surname={surname}
              image={img}
            />
            <div>
              <h5>
                {name} {surname}
              </h5>
              <p className="small-text">{email && email[0]}</p>
            </div>
          </div>
        </td>
        <td className="align-middle">
          <p className="p-2 inquire-address">{address}</p>
        </td>
        <td className="align-middle">
          <div className="d-flex align-items-center justify-content-start">
            <div className="me-2">
              <Calendar />
            </div>
            <p className="ms-1">{date}</p>
          </div>
        </td>
        <td className="align-middle">
          <div className="d-flex align-items-center justify-content-start">
            <div className="me-2">
              <Time />
            </div>
            <p className="ms-1">{time}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default InquiriesTableRow;
