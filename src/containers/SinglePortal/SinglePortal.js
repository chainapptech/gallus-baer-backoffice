// import React from 'react';
import { Row, Col,Tabs, Tab, Breadcrumb, InputGroup, FormControl, Button } from 'react-bootstrap';
import InquiriesCard from 'components/InquiriesCard';
import { Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';

const SinglePortal = () => {
  return (
        <Row className='pt-4'>
            <Col sm={12} md={12}>
            <Row>
                <Col sm={12} md={7}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/inquiries"}>Inquiries</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>“Compass” Inquiries</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='py-3'>“Compass” Inquiries</h2> 
                </Col>
                <Col sm={12} md={5} className="d-flex justify-content-end">
                    <img src='assets/listingPortal.png' alt='property' width={'300px'} />
                </Col>
            </Row>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="New inquiries" className='pt-3'>
                    <Row className='mb-3'>
                        <Col sm={12} md={6}>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Search inquiries..."
                                />
                                <Button variant="primary">
                                <BsSearch className="me-3" />
                                Search
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        <InquiriesCard name={'Seth'} surname={'Warren'} address={'76 Wareham Street, Unit 6E'} date={'25.03.2022.'} time={'22:50'} />
                        <InquiriesCard name={'Seth'} surname={'Warren'} address={'76 Wareham Street, Unit 6E'} date={'25.03.2022.'} time={'22:50'} />
                    </Row> 
                </Tab>
                <Tab eventKey="profile" title="Answered inquiries" className='pt-3'>
                    <Row className='mb-3'>
                        <Col sm={12} md={6}>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Search inquiries..."
                                />
                                <Button variant="primary">
                                <BsSearch className="me-3" />
                                Search
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        <InquiriesCard name={'Seth'} surname={'Warren'} address={'76 Wareham Street, Unit 6E'} date={'25.03.2022.'} time={'22:50'} />
                        <InquiriesCard name={'Seth'} surname={'Warren'} address={'76 Wareham Street, Unit 6E'} date={'25.03.2022.'} time={'22:50'} />
                        <InquiriesCard name={'Seth'} surname={'Warren'} address={'76 Wareham Street, Unit 6E'} date={'25.03.2022.'} time={'22:50'} />
                        <InquiriesCard name={'Seth'} surname={'Warren'} address={'76 Wareham Street, Unit 6E'} date={'25.03.2022.'} time={'22:50'} />
                        <InquiriesCard name={'Seth'} surname={'Warren'} address={'76 Wareham Street, Unit 6E'} date={'25.03.2022.'} time={'22:50'} />
                        <InquiriesCard name={'Seth'} surname={'Warren'} address={'76 Wareham Street, Unit 6E'} date={'25.03.2022.'} time={'22:50'} />
                    </Row> 
                </Tab>

            </Tabs>

            </Col>
        </Row> 

  )
};

export default SinglePortal;
