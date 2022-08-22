import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
// import LoaderButton from "../../components/LoaderButton";
// import { useAppContext } from "../../lib/contextLib";
// import { onError } from "../../lib/errorLib";
// import { Auth } from "aws-amplify";
import "./ForgotUsername.scss";
import Button from "components/Button";
import Input from "components/Input";

const ForgotUsername = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await Auth.signIn(email, password);
      // userHasAuthenticated(true);
      nav("/dashboard");
    } catch (e) {
      // let errorMessage = "Failed to do something exceptional";
      if (e instanceof Error) {
        // errorMessage = e.message;
        onError(e);
        setIsLoading(false);
      } else {
        alert("Unexpected error");
      }
    }
  }
  return (
    <Row className="g-0 login-page">
      <Col
        md={9}
        className="d-none d-sm-block d-sm-none d-md-block login-img"
      ></Col>
      <Col md={3} className="right">
        <img src="/assets/logo.png" alt="logo" className="logo mb-5" />
        <h2 className="mb-4">Forgot your username?</h2>
        <p className="mb-4">
          No problem! We’ll send you a username in email. Enter the email
          address and continue.
        </p>

        <Form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <Input
              label={"Email"}
              autoFocus
              type={"email"}
              value={email}
              placeholder={"johnsmith@gmail.com"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button className="mt-4 login-button">Send username</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ForgotUsername;
