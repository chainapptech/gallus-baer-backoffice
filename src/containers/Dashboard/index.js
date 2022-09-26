import { Row, Col } from "react-bootstrap";
import CreateCard from "components/CreateCard";
import WelcomeComponent from "components/WelcomeComponent";
import NewPropertyCard from "components/NewPropertyCard";
import Inquiries from "containers/Inqueries/Inquiries";
import SingleAccount from "components/SingleAccount";
import NewHomeCard from "components/NewHomeCard";
import InquiryAccordion from "components/InquiryAccordion";

import inquiries from "../../containers/Inqueries/inqueries-data.json";

const user = {
  name: "Merry Petrov",
  email: "mpetrov@bank.us",
  role: "owner",
};

const Dashboard = () => {
  return (
    <>
      <Row className="mt-3 pt-3 gy-3">
        <Col sm={12} md={12}>
          <WelcomeComponent />
        </Col>
        <Col sm={12} md={6}>
          <NewHomeCard type={"properties"}>
            <NewPropertyCard />
            <NewPropertyCard />
            <NewPropertyCard />
            <NewPropertyCard />
          </NewHomeCard>
        </Col>
        <Col sm={12} md={6}>
          <NewHomeCard type={"accounts"}>
            <SingleAccount user={user} />
            <SingleAccount user={user} />
            <SingleAccount user={user} />
          </NewHomeCard>
        </Col>
        <Col sm={12} md={12}>
          <NewHomeCard type={"inquiries"}>
            <InquiryAccordion inquiries={inquiries} />
          </NewHomeCard>
        </Col>

        {/* <Col sm={12} md={6}>
          <CreateCard
            title={"Create accounts"}
            buttonText={"Create accounts"}
            text={
              "User will be either automaticaly created once you set up SSO, or you can start creating internal users."
            }
            img={"account.png"}
          />
        </Col>

        <Col sm={12} md={6}>
          <CreateCard
            title={"Create new property"}
            buttonText={"Create property"}
            text={
              "User will be either automaticaly created once you set up SSO, or you can start creating internal users."
            }
            img={"property.png"}
          />
        </Col>

        <Col sm={12} md={12}>
          <CreateCard
            title={"Create account"}
            buttonText={"Create account"}
            text={
              "User will be either automaticaly created once you set up SSO, or you can start creating internal users."
            }
            img={"account.png"}
          />
        </Col> */}
      </Row>
    </>
  );
};

export default Dashboard;
