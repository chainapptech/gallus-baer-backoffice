import React from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ContactInfoCard from 'components/ContactInfoCard';
import ProfileIcon from 'components/ProfileIcon';
import AccountLabel from 'components/AccountLabel';
import PropertyCard from 'components/PropertyCard';
import AccountHistory from 'components/AccountHistory';
import NotFoundProperty from 'components/NotFoundProperty';

import './styles.scss';

var accountInfo = require("./account_info.json");
var propertiesData = require("./properties.json");
var history = require('./history.json');

const SingleAccountPage = () => {
  return (
            <Row className='pt-4'>
              <Col sm={12} md={9} className="pt-3">
                <h3>Accounts</h3>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"/accounts"}><p>Accounts</p></Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>{accountInfo.name}</Breadcrumb.Item>
                </Breadcrumb>

                <div className='d-flex align-items-center'>
              <ProfileIcon
                  name={accountInfo.name && accountInfo.name.split(' ')[0]}
                  surname={accountInfo.name && accountInfo.name.split(' ')[1]}
                  image={accountInfo.image || image}
                />

                <div className="d-flex flex-column ms-4">
                  <h4>{accountInfo.name}</h4>
                  <p className="link">{accountInfo.email[0]}</p>
                </div>

                <AccountLabel role={accountInfo.role} className={"ms-4"} />
                </div>

                <Row className='mt-4 pt-4'>
                  <Col>
                    <h3>Associated properties</h3>

                    <Row className="gy-4 mt-2">
                      {propertiesData.length === 0 ? <> <Col sm={12} md={1}></Col> <Col sm={12} md={6}><NotFoundProperty title={"Not found"} subtitle={"There are no associated properties with this account at the moment."} /></Col> </>: 
                      propertiesData.map((property, index) => (
                       <PropertyCard key={index} price={property.property.price} address={property.property.address} img={property.property.img} user={accountInfo}  />
                      ))}
                    </Row>
                  </Col>
                </Row>

                <Row className='mt-4 pt-2'>
                  <Col>
                    <AccountHistory history={history} user={accountInfo.name}/>
                  </Col>
                </Row>

              </Col>

              <Col sm={12} md={3}>
                <ContactInfoCard phoneNumbers={accountInfo.phone} emails={accountInfo.email}/>
              </Col>
            </Row>
  )
}

export default SingleAccountPage;
