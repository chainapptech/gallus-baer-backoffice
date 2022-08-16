import React from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';
import ProfileIcon from 'components/ProfileIcon';
import {BsCalendarEvent} from 'react-icons/bs';
import {FiSend} from 'react-icons/fi';
import Property from 'components/Property';
import {FiPhone} from 'react-icons/fi';
import { Link } from "react-router-dom";

import './SingleUser.scss';
const SingleUser = () => {
  return (
    <Row className='pt-4'>
        <Col>
            <Breadcrumb>
                <Breadcrumb.Item><Link to={"/accounts"}>Accounts</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Seth Warren</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col className='d-flex align-items-center user-info '>
                    <ProfileIcon name={'Seth'} surname={'Warren'}/>
                    <Col>
                        <h2>Seth Warren</h2>
                        <p><FiPhone className='me-2' /> +41 446 6677</p>
                    </Col>
                </Col>
                <Col className='d-flex align-items-center justify-content-end'>
                    <p role={'button'} className='me-3'><BsCalendarEvent className="me-2" />Make an Appontment</p>
                    <p role={'button'} className='ms-3'><FiSend className="me-2" /> Send Email</p>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col>
                <h3 className='py-3'>His properties</h3>
                <Row className="g-3">
                        <Property />
                        <Property />
                    </Row> 
                </Col>
            </Row>
        </Col>
    </Row>
  )
}

export default SingleUser
