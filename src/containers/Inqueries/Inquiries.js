// import React from 'react';
import { Row, Col, Table, Accordion, Button, Badge } from 'react-bootstrap';
import InquiriesTableRow from 'components/InquiriesTableRow';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Inquiries = () => {
  return (
    <Row>
      <Col sm={12} md={12}>
        <h2 className="py-3">Inquiries</h2>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <img
                    className="me-2"
                    src="assets/lisitng-portal-white.png"
                    alt="portal-logo"
                    width={'80px'}
                  />{' '}
                  Listing portal name{' '}
                  <Badge pill bg="primary" className="ms-2">
                    3 new
                  </Badge>
                  <Badge pill bg="primary" className="ms-2">
                    20 total
                  </Badge>
                </Accordion.Header>
                <Accordion.Body>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Property name</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                    </tbody>
                  </Table>
                  <Row>
                    <Col className="d-flex justify-content-end">
                      <Link to={'/singleportal'}>
                        <Button variant="light">
                          View all <BsArrowRight className="ms-2" />
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <img
                    className="me-2"
                    src="assets/lisitng-portal-white.png"
                    alt="portal-logo"
                    width={'80px'}
                  />
                  Listing portal name
                </Accordion.Header>
                <Accordion.Body>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Property name</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                    </tbody>
                  </Table>
                  <Row>
                    <Col className="d-flex justify-content-end">
                      <Link to={'/singleportal'}>
                        <Button variant="light">
                          View all <BsArrowRight className="ms-2" />
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <img
                    className="me-2"
                    src="assets/lisitng-portal-white.png"
                    alt="portal-logo"
                    width={'80px'}
                  />
                  Listing portal name
                </Accordion.Header>
                <Accordion.Body>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Property name</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                      <InquiriesTableRow
                        name={'Seth'}
                        surname={'Warren'}
                        address={'76 Wareham Street, Unit 6E'}
                        date={'25.03.2022.'}
                        time={'22:50'}
                      />
                    </tbody>
                  </Table>
                  <Row>
                    <Col className="d-flex justify-content-end">
                      <Link to={'/singleportal'}>
                        <Button variant="light">
                          View all <BsArrowRight className="ms-2" />
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Inquiries;
