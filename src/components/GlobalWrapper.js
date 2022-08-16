// import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import Sidebar from 'components/Sidebar';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnathenticatedRoute from './UnauthenticatedRoute';
import Header from 'components/Header';
const auth = false;

const GlobalWrapper = () => {

  return (
    <>
    {!auth ?  <UnathenticatedRoute /> : <>
    <Container fluid>
        <Row className="pb-4">
        <Col>
            <Header name={'Milton'} surname={'Fisher'} />
            <Row>
                <Sidebar />
                <Col sm={12} md={9} className="mt-4 pt-4">
                  <Container fluid>
                    <AuthenticatedRoute />
                  </Container>
                </Col>
            </Row>
        </Col>
        </Row>
    </Container>
    </>}
    </>
  )
};

export default GlobalWrapper;
