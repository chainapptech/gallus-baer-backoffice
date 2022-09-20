import { useState, useEffect } from "react";

import SingleAccount from "../../../components/SingleAccount";
// import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Button from "../../../components/Button";

import "./styles.scss";
import SearchInput from "../../../components/SearchInput";
import Modal from "react-bootstrap/Modal";
import InputComponent from "../../../components/Input";
import SendOutlined from "stories/svg/SendOutlined";
// import SingleAccount from "components/SingleAccount";

const Table = ({ accounts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [accountsList, setAccountsList] = useState(accounts);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setAccountsList(accounts);
    }

    const filteredAccounts = accounts.filter(
      ({ account }) =>
        account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setAccountsList(filteredAccounts);
  }, [searchTerm]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="d-flex flex-column accounts-table">
      <Row className="table-name">
        <Col sm={12} md={3}>
          <h4>Accounts</h4>
        </Col>

        <Col sm={12} md={6}>
          <div className="d-flex">
            <SearchInput
              placeholder={"Search account by account name, role"}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Button className={"ms-3"} type="secondary">
              Filters
            </Button>
          </div>
        </Col>
        <Col sm={12} md={3}>
          <div className="d-flex justify-content-end">
            <Button
              onClick={handleShow}
              leadingIcon={<SendOutlined fill="#EBD3BD" />}
            >
              Invite a new user
            </Button>
          </div>
        </Col>
      </Row>
      <Modal centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invite a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-share-property">
          <p className="mb-3">
            Enter the login mobile phone for account. The user will receive a
            link for registration... Lorem ipsum dolor sit amet, vince
            adipiscing elit...
          </p>
          <Row>
            <Col md={6}>
              <InputComponent
                label={"Mobile phone"}
                placeholder={"Placeholder text"}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="m-0 p-0">
          <Button type="text" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            className="mt-2 mb-2 m-3"
            leadingIcon={<SendOutlined fill="#EBD3BD" />}
          >
            Send invite
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="table-header d-flex align-items-center justify-content-between">
        <h5>Account name</h5>
        <h5 className="role-name">Role</h5>
      </div>
      <div className="table-body">
        {accountsList.map(({ id, account }) => (
          // <Link key={id} to={`/accounts/${id}`}>
          <SingleAccount user={account} table />
          // </Link>
        ))}
      </div>

      <div className="table-footer"></div>
    </div>
  );
};

export default Table;
