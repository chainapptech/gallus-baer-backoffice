import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
// import LoaderButton from "../../components/LoaderButton";
// import { useAppContext } from "../../lib/contextLib";
// import { onError } from "../../lib/errorLib";
// import { Auth } from "aws-amplify";
import "./NewPassword.scss";
import Button from "components/Button";
import Input from "components/Input";

const NewPassword = () => {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
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
        <h1 className="mb-4">Enter new password!</h1>
        <p className="mb-4">
          No problem! Enter your new password and continue.
        </p>

        <Form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <Input
              label={"New password"}
              autoFocus
              type={"password"}
              value={password}
              placeholder={"input your password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <Input
              label={"Confirm Password"}
              autoFocus
              type={"password"}
              value={passwordConfirm}
              placeholder={"input your password"}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <Button className="mt-4 login-button">Reset password</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default NewPassword;
