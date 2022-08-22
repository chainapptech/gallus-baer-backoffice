import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Table from "components/Table";

import "./styles.scss";

import data from "./accounts.json";

const Accounts = () => {
  return (
    <>
      <Row className="pt-4">
        <Col className="pt-3">
          <Table accounts={data} />
        </Col>
      </Row>
    </>
  );
};

export default Accounts;
