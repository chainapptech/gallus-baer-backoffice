import { Col } from "react-bootstrap";
import "./styles.scss";

const AccountHistory = ({ account }) => (
  <Col className="account-history">
    <h2 className="mb-3">Account history</h2>

    {account.histories.map(({ id, history }) => (
      <p key={id} className="mb-2">
        {history.date} {history.time}{" "}
        <span className="ms-2 fw-bold">{`@${account.name}`}</span>{" "}
        <span>{history.action}</span>
      </p>
    ))}
  </Col>
);

export default AccountHistory;
