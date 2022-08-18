import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CreateCard from 'components/CreateCard';


const Dashboard = () => {
  return (
    <>
      <Row className="mt-4 pt-3 gy-3">
        <Col sm={12} md={6}>
          <CreateCard title={"Create accounts"} buttonText={"Create accounts"} text={"User will be either automaticaly created once you set up SSO, or you can start creating internal users."} img={"account.png"}/>
        </Col>

        <Col sm={12} md={6}>
        <CreateCard title={"Create new property"} buttonText={"Create property"} text={"User will be either automaticaly created once you set up SSO, or you can start creating internal users."} img={"property.png"}/>
        
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
