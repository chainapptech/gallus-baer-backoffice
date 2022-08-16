import React from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate, Link } from 'react-router-dom';
import { Col, Container, Nav } from 'react-bootstrap';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { GrDocument } from 'react-icons/gr';
import { BsArrowBarLeft, BsGrid } from 'react-icons/bs';

import { useAppContext } from '../../lib/contextLib';

import './styles.scss';

const Sidebar = () => {
  const { userHasAuthenticated } = useAppContext();
  const nav = useNavigate();

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
    nav('/login');
  }
  
  return (
    <>
      <Col sm={12} md={3} className="mt-4 pt-4 min-vh-100 sidebar">
        <Container fluid>
          <Nav
            fixed="top"
            defaultActiveKey="/home"
            className="flex-column mt-4 pt-4 position-fixed"
          >
            <Link className="mb-4 py-2 px-3 sidebar-links" to={'/'}>
              <AiOutlineHome className="me-3" />
              Home
            </Link>
            <Link className="mb-4 py-2 px-3 sidebar-links" to={'/accounts'}>
              <FiUsers className="me-3" />
              Accounts
            </Link>
            <Link className="mb-4 py-2 px-3 sidebar-links" to={'/inquiries'}>
              <GrDocument className="me-3" />
              Inquiries
            </Link>
            <Link className="mb-4 py-2 px-3 sidebar-links" to={'/properties'}>
              <BsGrid className="me-3" />
              Properties
            </Link>
            <hr />
            <Link className="mb-4 py-2 px-3 sidebar-links" to={'/login'} onClick={handleLogout}>
              <BsArrowBarLeft className="me-3" />
              Logout
            </Link>
          </Nav>
        </Container>
      </Col>
    </>
  );
};

export default Sidebar;
