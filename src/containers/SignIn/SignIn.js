import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import Button from "components/Button";
import Input from "components/Input";
import { useAppContext } from "lib/contextLib";
// import LoaderButton from "../../components/LoaderButton";
// import { useAppContext } from "../../lib/contextLib";
// import { onError } from "../../lib/errorLib";
// import { Auth } from "aws-amplify";
import "./SignIn.scss";


const SignIn = () => {
  const { setAuthenticated } = useAppContext();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const loginHandler = () => {
    setAuthenticated(true);
    nav("/");
  };
  return (
    <Row className="g-0 login-page">
      <Col
        md={9}
        className="d-none d-sm-block d-sm-none d-md-block login-img"
      ></Col>
      <Col md={3} className="right">
        <img src="/assets/logo.png" alt="logo" className="logo mb-5" />
        <h1 className="mb-4">Sign in</h1>
        <p className="mb-4">
          Join us and find your dream home with us! Best options, great
          locations and professional who are here to help you achive your goal!
        </p>

        <Form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <Input
              label={"Username or Email"}
              autoFocus
              type={"email"}
              value={email}
              placeholder={"johnsmith@gmail.com"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <Input
              label={"Password"}
              autoFocus
              type="password"
              value={password}
              placeholder={"input your password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/forgot-password">Forgot password</Link>
          <Button className="mt-4 login-button" onClick={loginHandler}>Login</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignIn;
