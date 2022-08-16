import React, { useState } from 'react';
import { Row, Offcanvas } from 'react-bootstrap';
import { BsCalendarEvent, BsSmartwatch } from 'react-icons/bs';

import ProfileIcon from 'components/ProfileIcon';
import InquiriesCard from 'components/InquiriesCard';

const InquiriesTableRow = ({ name, surname, address, date, time }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas
        style={{ width: '40%' }}
        placement={'end'}
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
            address={address}
            date={date}
            time={time}
          />
        </Offcanvas.Body>
      </Offcanvas>

      <tr role="button" onClick={handleShow}>
        <td className="align-middle">
          <Row className="align-items-center ms-3">
            <ProfileIcon name={name} surname={surname} />
            {name} {surname}
          </Row>
        </td>
        <td className="align-middle">{address}</td>
        <td className="align-middle">
          <BsCalendarEvent className="me-2" />
          {date}
        </td>
        <td className="align-middle">
          <BsSmartwatch className="me-2" />
          {time}
        </td>
      </tr>
    </>
  );
};

export default InquiriesTableRow;
