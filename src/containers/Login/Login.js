import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import { useAppContext } from "../../lib/contextLib";
import { onError } from "../../lib/errorLib";
import { Auth } from "aws-amplify";
import "./Login.scss";
import Button from "components/Button";
// interface UserCredentials {
//   email: string;
//   password: string;
// }

const Login = () => {
  // const { userHasAuthenticated } = useAppContext();
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

  return (
    <Row className="no-gutters center login-page">
      <Col md={7} className="login-img"></Col>
      <Col md={5} className="d-flex flex-column justify-items-center">
        <img src="/assets/logo.png" alt="logo" className="logo mb-5" />
        <h1 className="mb-4">Login</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" className="my-3">
            <Form.Label>Username or Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button>Login</Button>
          <br />
          <a href="/reset-password">Forgot your password?</a>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
