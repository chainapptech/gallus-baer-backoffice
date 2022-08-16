import React from 'react';
import { Row, Col, Breadcrumb, Button, Card, Badge } from 'react-bootstrap';
import {AiOutlineFileImage} from 'react-icons/ai';
import {BsQuestionLg} from 'react-icons/bs';
import {FiActivity} from 'react-icons/fi';
import {BsClipboardData} from 'react-icons/bs';
import { Link } from "react-router-dom";
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsCalendarEvent} from 'react-icons/bs';
import {FiSend} from 'react-icons/fi';
import {AiOutlineCheck} from 'react-icons/ai';

import './SingleProperty.scss';

const SingleProperty = () => {
  return (
    <Row className='pt-4'>
        <Col>
            <Row>
                <Col sm={12} md={7}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/properties"}>Properties</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Property name</Breadcrumb.Item>
                    </Breadcrumb>
                    <Badge bg="secondary" className='me-2'>
                        Apartment
                    </Badge>
                    <Badge bg="secondary" className='me-2'>
                        For Sale
                    </Badge>
                    <Badge bg="secondary" className='me-2'>
                        Awaiting Approval
                    </Badge>
                    <h2  className='mt-3'>76 Wareham Street, Unit 6E</h2>
                    <Row className='mt-3'>
                        <Col>
                            <Button><AiOutlineFileImage className='me-2'/>View property details</Button>
                        </Col>
                        <Col>
                            <Button variant='dark'><BsQuestionLg className='me-2'/>Request additional information</Button>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} md={5} className="d-flex justify-content-end">
                    <img src='assets/property-img.jpg' alt='property' />
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col>
                    <Card role={'button'}>
                        <Card.Body className='d-flex flex-column align-items-center justify-content-center p-4'>
                            <FiActivity size={70} className="mb-3"/>
                            <Card.Text>Activities</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Link to={"/propertyinquiries"}>
                        <Card role={'button'}>
                            <Card.Body className='d-flex flex-column align-items-center justify-content-center p-4'>
                                <BsQuestionLg size={70} className="mb-3"/>
                                <Card.Text>Inquiries</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

                <Col>
                    <Card role={'button'}>
                        <Card.Body className='d-flex flex-column align-items-center justify-content-center p-4'>
                            <BsClipboardData size={70} className="mb-3"/>
                            <Card.Text>Marketing data</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col>
                    <h3>Create Ads - choose portal</h3>
                    <Row className='mt-3 portal-list g-3'>
                        <Col sm={12} md={3}>
                            <Card role={'button'}>
                                <Card.Img variant="top" src="assets/listingPortal.png" />
                            </Card>
                        </Col>

                        <Col sm={12} md={3}>
                            <Card role={'button'}>
                                <Card.Img variant="top" src="assets/listingPortal.png" />
                            </Card>
                        </Col>

                        <Col sm={12} md={3}>
                            <Card role={'button'}>
                                <Card.Img variant="top" src="assets/listingPortal.png" />
                            </Card>
                        </Col>

                        <Col sm={12} md={3}>
                            <Card role={'button'}>
                                <Card.Img variant="top" src="assets/listingPortal.png" />
                            </Card>
                        </Col>

                        <Col sm={12} md={3}>
                            <Card role={'button'}>
                                <Card.Img variant="top" src="assets/listingPortal.png" />
                            </Card>
                        </Col>

                        <Col sm={12} md={3}>
                            <Card role={'button'}>
                                <Card.Img variant="top" src="assets/listingPortal.png" />
                            </Card>
                        </Col>

                        <Col sm={12} md={3}>
                            <Card role={'button'}>
                                <Card.Img variant="top" src="assets/listingPortal.png" />
                            </Card>
                        </Col>

                        <Col sm={12} md={3}>
                            <Card role={'button'}>
                                <Card.Img variant="top" src="assets/listingPortal.png" />
                            </Card>
                        </Col>
                    </Row>
                </ Col>
            </Row>

            <Row className='mt-4 p-3 automated-valuation'>
                <Col>
                    <h3>Automated valuation</h3>
                </Col>
                <Col className="d-flex justify-content-end">
                    <h3>$245 000</h3>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h3>Share this new property on social networks</h3>
                    <Row className="mt-3">
                        <Col className='d-flex'>
                            <BsFacebook size={50} className="me-4" />
                            <BsTwitter size={50} className="me-4"/>
                            <AiFillLinkedin size={50} className="me-4"/>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <h3>Contact the new property owner or manager</h3>
                    <Row className="mt-3">
                        <Col className='pe-3'>
                            <Row>
                                <Button variant='dark'><FiSend className='me-2'/>Send email</Button>
                           </Row>
                        </Col>

                        <Col className='ps-3'>
                            <Row>
                                <Button variant='dark'><BsCalendarEvent className='me-2'/>Make an appointment</Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Button><AiOutlineCheck className="me-2" />Publish new property</Button>
            </Row>
        </Col>
    </Row>
  )
}

export default SingleProperty;
