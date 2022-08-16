import React from 'react';
import {Row} from 'react-bootstrap';
import {BsCalendarEvent} from 'react-icons/bs';
import {FiSend} from 'react-icons/fi';
import ProfileIcon from 'components/ProfileIcon';
import { Link } from "react-router-dom";
const ContactTableRow = ({name, surname}) => {
  return (
    <tr>
        <td className='align-middle'><Link to={"/singleuser"}><Row className="d-flex align-items-center ms-3"><ProfileIcon name={name} surname={surname}/>{name} {surname}</Row></Link></td>
        <td className='align-middle'><Link to={"/singleuser"}><p><BsCalendarEvent className="me-2" />Make an appontment</p></Link></td>
        <td className='align-middle'><Link to={"/singleuser"}><p><FiSend className="me-2" /> Send email</p></Link></td>
    </tr>
  )
}

export default ContactTableRow;
