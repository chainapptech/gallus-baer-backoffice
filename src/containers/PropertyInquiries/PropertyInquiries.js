// import React from 'react';
import { Row, Col,Tabs, Tab, Breadcrumb, Button,InputGroup, FormControl } from 'react-bootstrap';
import InquiriesCard from 'components/InquiriesCard';
import { Link } from "react-router-dom";
import {AiOutlineFileImage} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';

const PropertyInquiries = () => {
  return (
        <Row className='pt-4'>
            <Col sm={12} md={12}>
            <Row>
                <Col sm={12} md={7}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/properties"}>Properties</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/singleproperty"}>Apartment Grey Mountain</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Inqueries</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className='py-3'>Apartment Grey Mountain</h2> 
                    <Button><AiOutlineFileImage className='me-2'/>View Property Details</Button>
                </Col>
                <Col sm={12} md={5} className="d-flex justify-content-end">
                    <img src='assets/property-img.jpg' alt='property' width={'300px'} />
                </Col>
            </Row>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="New Inquiries" className='pt-3'>
                    <Row className='mb-3'>
                        <Col sm={12} md={6}>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Search Inquiries..."
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
                <Tab eventKey="profile" title="Answered Inquiries" className='pt-3'>
                    <Row className='mb-3'>
                        <Col sm={12} md={6}>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Search Inquiries..."
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

export default PropertyInquiries;
