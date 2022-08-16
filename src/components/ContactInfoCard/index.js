import React from 'react';
import Card from 'react-bootstrap/Card';
import ContactLabel from '../ListItem';
import Button from '../Button';
import FilledEmail from '../../stories/svg/FilledEmail';
import FilledPhone from '../../stories/svg/FilledPhone';

import './styles.scss';

const ContactInfoCard = () => {
  return (
    <Card className="contact-info-card">
      <Card.Body>
        <h3>Contact info</h3>
        <p className='contact-name'>Phone number</p>
        <ContactLabel icon={<FilledPhone />}>+41 445 4543</ContactLabel>
        <ContactLabel icon={<FilledPhone />}>+41 445 4543</ContactLabel>
        
        <p className='contact-name'>Email</p>
        <ContactLabel icon={<FilledEmail />}>amilano@gmail.com</ContactLabel>
        <ContactLabel icon={<FilledEmail />}>analisa.ger.milano@gmail.com</ContactLabel>

        <Button>Schedule an appointment</Button>
      </Card.Body>
    </Card>
  )
}

export default ContactInfoCard;
