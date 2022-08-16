import React from 'react';
import Card from 'react-bootstrap/Card';
import ContactLabel from '../ListItem';
import Button from '../Button';
import FilledEmail from '../../stories/svg/FilledEmail';
import FilledPhone from '../../stories/svg/FilledPhone';

import './styles.scss';

const ContactInfoCard = ({phoneNumbers, emails}) => {
  return (
    <Card className="contact-info-card">
      <Card.Body>
        <h3>Contact info</h3>
        <p className='contact-name'>Phone number</p>
        
        {phoneNumbers.map((phone, index) => (
          <ContactLabel key={index} icon={<FilledPhone />}>{phone}</ContactLabel>
        ))}
        
        <p className='contact-name'>Email</p>

        {emails.map((email, index) => (
          <ContactLabel key={index} icon={<FilledEmail />}>{email}</ContactLabel>
        ))}

        <Button>Schedule an appointment</Button>
      </Card.Body>
    </Card>
  )
}

export default ContactInfoCard;
