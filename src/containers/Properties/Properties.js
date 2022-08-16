import React,{useState} from 'react';
import { Row, Col,Tabs, Tab, InputGroup, FormControl, Button, Offcanvas, Form } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import Property from 'components/Property/Property';

const Properties = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

    <>
      <Offcanvas placement={'end'} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>All filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <h3 className='mb-3'>Type of property</h3>
            <p className='mb-2'>What are you looking to buy?</p>

            <Form.Check 
                type='checkbox'
                label='Apartment'
            />

            <Form.Check 
                type='checkbox'
                label='House'
            />

            <Form.Check 
                type='checkbox'
                label='Office space'
            />

            <h3 className='my-3'>Location</h3>

            <Form.Group className="mb-3">
                <Form.Label>City/Town</Form.Label>
                <Form.Select className='mb-3'>
                    <option>Select location</option>
                    <option>Zürich</option>
                    <option>Geneva</option>
                    <option>Basel</option>
                    <option>Lausanne</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Radious</Form.Label>
                <Form.Select>
                    <option>0km</option>
                    <option>+5km</option>
                    <option>+10km</option>
                    <option>+20km</option>
                </Form.Select>
            </Form.Group>

            <h3 className='my-3'>Price range</h3>

            <Row>
                <Col>
                <Form.Group className="mb-3">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" placeholder="$ 40 000" />
                </Form.Group>

                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>To</Form.Label>
                        <Form.Control type="text" placeholder="$ 100 000" />
                    </Form.Group>
                </Col>
            </Row>

            <h3 className='my-3'>Other details</h3>

            <Form.Check 
                type='checkbox'
                label='Parking'
            />

            <Form.Check 
                type='checkbox'
                label='Spa'
            />

            <Form.Check 
                type='checkbox'
                label='Swimming pool'
            />

            <Form.Check 
                type='checkbox'
                label='Fitness centre'
            />

            <Form.Check 
                type='checkbox'
                label='Electric vehicle charging station'
            />

            <Form.Check 
                type='checkbox'
                label='Teracce'
            />

            <Form.Check 
                type='checkbox'
                label='View'
            />

            <Form.Check 
                type='checkbox'
                label='Washing machine'
            />

  
        </Offcanvas.Body>
      </Offcanvas>
   
        <Row>
            <Col sm={12} md={12}>
            <h2 className='py-3'>Properties</h2> 

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="New properties" className='pt-3'>
                <Row>
                    <Col sm={12} md={4}>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Search properties..."
                            />
                            <Button variant="primary">
                            <BsSearch className="me-3" />
                            Search
                            </Button>
                        </InputGroup>
                    </Col>

                    <Col sm={12} md={4}>
                        <Button variant="dark" onClick={handleShow}>
                            Filters
                        </Button>
                    </Col>
                </Row>

                    <Row className="g-3">
                        <Property />
                        <Property />

                    </Row> 
                </Tab>
                <Tab eventKey="profile" title="Existing properties" className='pt-3'>
                <Row>
                    <Col sm={12} md={4}>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Search properties..."
                            />
                            <Button variant="primary">
                            <BsSearch className="me-3" />
                            Search
                            </Button>
                        </InputGroup>
                    </Col>

                    <Col sm={12} md={4}>
                        <Button variant="dark" onClick={handleShow}>
                            Filters
                        </Button>
                    </Col>
                </Row>
                    <Row className="g-3">
                        <Property />
                        <Property />
                        <Property />
                        <Property />
                        <Property />
                        <Property />
                    </Row> 
                </Tab>

            </Tabs>

            </Col>
        </Row> 
        </>

  )
};

export default Properties;
