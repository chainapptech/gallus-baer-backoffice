import React,{useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import Table from 'components/Table';

import './styles.scss';
var data = require("./accounts.json");

const Accounts = () => {

  return (
      <>
        <Row className="accounts-container">
            <Col>
                <Table accounts={data}/>
            </Col>
        </Row> 
</>
  )
};

export default Accounts;
