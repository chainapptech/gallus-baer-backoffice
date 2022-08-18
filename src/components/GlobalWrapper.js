import { Row, Col, Container} from 'react-bootstrap';
import { useAppContext } from 'lib/contextLib';
import Sidebar from 'components/Sidebar';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnathenticatedRoute from './UnauthenticatedRoute';
import Header from 'components/Header';

const GlobalWrapper = () => {
  const { authenticated } = useAppContext();
  return (
    <>
      {!authenticated ? (
        <UnathenticatedRoute />
      ) : (
        <>
          <Container fluid>
            <Row className="pb-4">
              <Col>
                <Header name={"Johhn"} surname={"Doe"} />
                <Row>
                  <Sidebar />
                  <Col sm={12} md={10} className="mt-4 pt-4 wrapper">
                    <Container fluid>
                      <AuthenticatedRoute />
                    </Container>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default GlobalWrapper;
