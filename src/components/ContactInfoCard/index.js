import React from "react";
import Card from "react-bootstrap/Card";
import ContactLabel from "../ListItem";
import Button from "../Button";
import FilledEmail from "../../stories/svg/FilledEmail";
import FilledPhone from "../../stories/svg/FilledPhone";

import "./styles.scss";
import ProfileIcon from "components/ProfileIcon";

const ContactInfoCard = ({
  phoneNumbers,
  emails,
  className,
  img,
  name,
  surname,
}) => {
  return (
    <Card className={`contact-info-card ${className}`}>
      <Card.Body>
        <h3 className="contact-info-title">Contact info</h3>
        <div className="d-flex align-items-center">
          <ProfileIcon
            // name={feedback?.account.name}
            // surname={feedback?.account.surname}
            image={img}
          />
          <h5 className="ms-3">
            {name} {surname}
          </h5>
        </div>
        <p className="contact-name">Phone number</p>

        {phoneNumbers.map((phone, index) => (
          <ContactLabel key={index} icon={<FilledPhone />}>
            {phone}
          </ContactLabel>
        ))}

        <p className="contact-name">Email</p>

        {emails.map((email, index) => (
          <ContactLabel key={index} icon={<FilledEmail />}>
            {email}
          </ContactLabel>
        ))}
        <Button>Schedule an appointment</Button>
        <Button type="secondary">Send a brochure</Button>
        <Button type="secondary">Schedule a viewing</Button>
      </Card.Body>
    </Card>
  );
};

export default ContactInfoCard;
