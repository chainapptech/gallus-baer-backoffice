import React from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ContactInfoCard from 'components/ContactInfoCard';
import ProfileIcon from 'components/ProfileIcon';
import AccountLabel from 'components/AccountLabel';
import Property from "components/PropertyCard";
import AccountHistory from 'components/AccountHistory';
import NotFoundProperty from 'components/NotFoundProperty';

import './styles.scss';

var accountInfo = require("./account_info.json");

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
                  name={accountInfo.name}
                  surname={accountInfo.surname}
                  image={accountInfo.img || img}
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
                      { accountInfo.properties.length === 0 ? <> <Col sm={12} md={1}></Col> <Col sm={12} md={6}><NotFoundProperty title={"Not found"} subtitle={"There are no associated properties with this account at the moment."} /></Col> </>: 
                      accountInfo.properties.map(({id, property}) => (
                        <Col key={id} sm={12} md={4}>
                          <Property property={property} user={accountInfo} />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>

                <Row className='mt-4 pt-2'>
                  <Col>
                    <AccountHistory history={accountInfo.histories} user={accountInfo.name}/>
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
