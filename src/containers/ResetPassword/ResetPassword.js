import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { Row, Col, Form } from 'react-bootstrap';
import {
  FormText,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { BsCheck } from "react-icons/bs";
import LoaderButton from "../../components/LoaderButton";
import { useFormFields } from "../../lib/hooksLib";
import { onError } from "../../lib/errorLib";

export default function ResetPassword() {
  const [fields, handleFieldChange] = useFormFields({
    code: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  function validateCodeForm() {
    return fields.email.length > 0;
  }

  function validateResetForm() {
    return (
      fields.code.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleSendCodeClick(event) {
    event.preventDefault();

    setIsSendingCode(true);

    try {
      await Auth.forgotPassword(fields.email);
      setCodeSent(true);
    } catch (error) {
      onError(error);
      setIsSendingCode(false);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    setIsConfirming(true);

    try {
      await Auth.forgotPasswordSubmit(
        fields.email,
        fields.code,
        fields.password
      );
      setConfirmed(true);
    } catch (error) {
      onError(error);
      setIsConfirming(false);
    }
  }

  function renderRequestCodeForm() {
    return (
		<Row className="no-gutters login-page">
			 <Col md={7} className="login-img">
        
			</Col>
			<Col
				md={5}
				className="d-flex flex-column justify-items-center"
			>
				<img src="/assets/logo.png" alt="logo" className="mb-5" />
				<h1 className="mb-4">Reset Password</h1>
				<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				illum rem aut cupiditate. Quam, magnam maxime porro libero sunt
				repellat hic est. Cum consequatur placeat totam consequuntur facere
				sapiente laborum.
				</p>
				<Form onSubmit={handleSendCodeClick}>
					<FormGroup bsSize="large" controlId="email" className="my-3">
					<FormLabel>Email</FormLabel>
					<FormControl
						autoFocus
						type="email"
						value={fields.email}
						onChange={handleFieldChange}
					/>
					</FormGroup>
					<LoaderButton
					block
					type="submit"
					bsSize="large"
					variant="dark"
					isLoading={isSendingCode}
					disabled={!validateCodeForm()}
					className="mb-4"
					>
					Send Confirmation
					</LoaderButton>
					<br />
					<a href="/">Back to Login</a>
				</Form>
			</Col>
			</Row>
      
    );
  }

  function renderConfirmationForm() {
    return (
		<Row className="no-gutters center">
			<Col
				lg={4}
				className="d-flex flex-column justify-items-center  login-sidebar"
			>
				<img src="/assets/logo.png" alt="logo" className="mb-5" />
				<h1>Confirm Code</h1>
				<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				illum rem aut cupiditate. Quam, magnam maxime porro libero sunt
				repellat hic est. Cum consequatur placeat totam consequuntur facere
				sapiente laborum.
				</p>
				<Form onSubmit={handleConfirmClick}>
					<FormGroup bsSize="large" controlId="code">
					<FormLabel>Confirmation Code</FormLabel>
					<FormControl
						autoFocus
						type="tel"
						value={fields.code}
						onChange={handleFieldChange}
					/>
					<FormText>
						Please check your email ({fields.email}) for the confirmation code.
					</FormText>
					</FormGroup>
					<hr />
					<FormGroup bsSize="large" controlId="password">
					<FormLabel>New Password</FormLabel>
					<FormControl
						type="password"
						value={fields.password}
						onChange={handleFieldChange}
					/>
					</FormGroup>
					<FormGroup bsSize="large" controlId="confirmPassword">
					<FormLabel>Confirm Password</FormLabel>
					<FormControl
						type="password"
						value={fields.confirmPassword}
						onChange={handleFieldChange}
					/>
					</FormGroup>
					<LoaderButton
					block
					type="submit"
					bsSize="large"
					variant="dark"
					isLoading={isConfirming}
					disabled={!validateResetForm()}
					>
					Confirm
					</LoaderButton>
				</Form>
			</Col>
			</Row>

      
    );
  }

  function renderSuccessMessage() {
    return (
		<Row className="no-gutters center">
			<Col
				lg={4}
				className="d-flex flex-column justify-items-center login-sidebar"
			>
				<img src="/assets/logo.png" alt="logo" className="mb-5" />
				<h1>Reset Password</h1>
				<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				illum rem aut cupiditate. Quam, magnam maxime porro libero sunt
				repellat hic est. Cum consequatur placeat totam consequuntur facere
				sapiente laborum.
				</p>
				<div className="success">
					<p><BsCheck size={16} /> Your password has been reset.</p>
					<p>
					<Link to="/">
						Click here to login with your new credentials.
					</Link>
					</p>
				</div>
			</Col>
			</Row>
      
    );
  }

  return (
    <div className="ResetPassword">
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmationForm()
        : renderSuccessMessage()}
    </div>
  );
}