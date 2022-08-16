import React, {useState, useEffect} from 'react';

import SingleAccount from '../SingleAccount';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button as BootstrapButton,
  Offcanvas,
  Form,
} from "react-bootstrap";
import Button from "components/Button";
import MagnifyingGlass from "stories/svg/MagnifyingGlass";

import './styles.scss';

const Table = ({ accounts }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [accountsList, setAccountsList] = useState(accounts);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setAccountsList(accounts);
    }

    const filteredAccounts = accounts.filter(({ account }) =>
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) || account.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setAccountsList(filteredAccounts);
  }, [searchTerm]);

  return (
    <div className="d-flex flex-column accounts-table">
      <Row className='table-name'>
        <Col sm={12} md={5}>
        <h4>Accounts</h4>
        </Col>

        <Col sm={12} md={7}>
          <div className="d-flex">
            <InputGroup className="d-flex align-items-center ps-3 bg-white rounded-1 border border-1 border-grey">
              <MagnifyingGlass fill="#000" scale={0.8} />
              <FormControl
                placeholder="Search accopunt by account name, role"
                className="p-2 border-0 bg-transparent shadow-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
       
            <Button className={"ms-2"} type="secondary">
              Filters
            </Button>
          </div>
        </Col>
      </Row>
      <div className="table-header d-flex justify-content-between">
        <h5>Account name</h5>
        <h5 className='role-name'>Role</h5>
      </div>
      <div className="table-body">
        {accountsList.map(({id, account}) => (
          <Link key={id} to={`/singleaccount?id=${id}`} >
            <SingleAccount user={account} table />
          </Link>
        ))}
      </div>

      <div className='table-footer'></div>
    </div>
  );
};

export default Table;
