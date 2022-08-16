import React,{useState} from 'react';
import { Row, Col, Table, InputGroup, FormControl, Button, Offcanvas } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import ContactTableRow from 'components/ContactTableRow';

const Accounts = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
      <>
      <Offcanvas placement={'end'} show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>All Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        
      </Offcanvas.Body>
    </Offcanvas>
        <Row>
            <Col sm={12} md={12}>
                <h2 className='py-3'>Accounts</h2>

                <Row>
                    <Col sm={12} md={4}>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Search users..."
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

                <Table striped>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Meet</th>
                    <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <ContactTableRow name={'Seth'} surname={'Warren'}  />
                    <ContactTableRow name={'Riley'} surname={'Perez'} />
                    <ContactTableRow name={'Lucy'} surname={'Shaw'}/>
                    <ContactTableRow name={'Milton'} surname={'Fisher'}/>
                    <ContactTableRow name={'Milton'} surname={'Fisher'}/>
                    <ContactTableRow name={'Riley'} surname={'Perez'}/>
                </tbody>
                </Table>
            </Col>
        </Row> 
</>
  )
};

export default Accounts;
