import Card from "react-bootstrap/Card";
import ContactLabel from "../ListItem";
import Button from "../Button";
import FilledEmail from "../../stories/svg/FilledEmail";
import FilledPhone from "../../stories/svg/FilledPhone";

import "./styles.scss";
import ProfileIcon from "components/ProfileIcon";
import InstagramLogo from "stories/svg/InstagramLogo";
import LinkedinLogo from "stories/svg/LinkedinLogo";
import FacebookLogo from "stories/svg/FacebookLogo";
import TikTokLogo from "stories/svg/TikTokLogo";
import WhatsAppLogo from "stories/svg/WhatsAppLogo";

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
        <p className="mt-3">Social network</p>
        <div className="social-network d-flex align-items-center justify-content-start">
          <div className="social-logo me-4">
            <InstagramLogo />
          </div>
          <div className="social-logo me-4">
            <LinkedinLogo />
          </div>
          <div className="social-logo me-4">
            <FacebookLogo />
          </div>
          <div className="social-logo me-4">
            <TikTokLogo />
          </div>
          <div className="social-logo me-4">
            <WhatsAppLogo />
          </div>
        </div>
        <Button>Schedule an appointment</Button>
        <Button type="secondary">Send a brochure</Button>
        <Button type="secondary">Schedule a viewing</Button>
      </Card.Body>
    </Card>
  );
};

export default ContactInfoCard;
