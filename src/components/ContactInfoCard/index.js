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

const ContactInfoCard = ({ account, className }) => {
  return (
    <Card className={`contact-info-card ${className}`}>
      <Card.Body>
        <h3 className="contact-info-title">Contact info</h3>
        <div className="d-flex align-items-center">
          <ProfileIcon
            // name={feedback?.account.name}
            // surname={feedback?.account.surname}
            image={account?.img}
          />
          <h5 className="ms-3">
            {account?.name} {account?.surname}
          </h5>
        </div>
        <p className="contact-name">Phone number</p>

        {account?.phone?.map((itemPhone, index) => (
          <ContactLabel key={index} icon={<FilledPhone />}>
            {itemPhone}
          </ContactLabel>
        ))}

        <p className="contact-name">Email</p>

        {account?.email?.map((itemEmail, index) => (
          <ContactLabel key={index} icon={<FilledEmail />}>
            {itemEmail}
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
        <Button type="secondary">Export property</Button>
      </Card.Body>
    </Card>
  );
};

ContactInfoCard.defaultProps = {
  account: {
    name: "John",
    surname: "Doe",
    role: "owner",
    img: "account-1.jpg",
    email: ["johndoe@gmail.com", "johndoe.ger.milano@gmail.com"],
    phone: ["+414454543", "+414454543"],
    properties: [
      {
        id: 1,
        property: {
          img: "dummy-property-1.png",
          price: 1585000,
          "previous-price": 1280000,
          tags: ["For Sale", "House"],
          address: "372 Central Park West, Unit 17",
          approved: true,
        },
      },
      {
        id: 2,
        property: {
          img: "dummy-property-2.png",
          price: 1585000,
          "previous-price": 1280000,
          tags: ["For Sale", "House"],
          address: "354 Bridle Ave.Frederick, MD 21701",
          approved: false,
        },
      },
      {
        id: 3,
        property: {
          img: "dummy-property-3.png",
          price: 1585000,
          "previous-price": 1280000,
          tags: ["For Sale", "House"],
          address: "583 Fairview Rd Brooks (GA), 30205",
          approved: true,
        },
      },
      {
        id: 4,
        property: {
          img: "dummy-property-4.png",
          price: 1585000,
          "previous-price": 1280000,
          tags: ["For Sale", "House"],
          address: "1651 California Rd Ridgway (PA)",
          approved: true,
        },
      },
      {
        id: 5,
        property: {
          img: "dummy-property-5.png",
          price: 1585000,
          "previous-price": 1280000,
          tags: ["For Sale", "House"],
          address: "4917 Cedar Ln Thomson (IL)",
          approved: true,
        },
      },
    ],
    histories: [
      {
        id: 1,
        history: {
          date: "19.03.2022.",
          time: "15:24",
          action: "updated his profile.",
        },
      },
      {
        id: 2,
        history: {
          date: "15.03.2022.",
          time: "10:54",
          action: "added a new phone number.",
        },
      },
      {
        id: 3,
        history: {
          date: "13.03.2022.",
          time: "12:36",
          action: "account verified.",
        },
      },
      {
        id: 4,
        history: {
          date: "13.03.2022.",
          time: "12:27",
          action: "account created.",
        },
      },
    ],
  },
};

export default ContactInfoCard;
