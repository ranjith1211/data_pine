import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

function Login() {
  return (
    <div className="cont">
      <p className="para">TAKE ADVANTAGE OF PROFESSIONAL BUSINESS DASHBOARDS</p>
      <p className="par">
        Setup only takes one minute. No credit card required!
      </p>
      <Form className="login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Bussiness email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="btn" variant="secondary" type="submit">
          Start with Free Trial
        </Button>
      </Form>
    </div>
  );
}

export default Login;
